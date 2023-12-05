import { relations, sql } from 'drizzle-orm';
import {
  bigint,
  index,
  int,
  mysqlEnum,
  mysqlTableCreator,
  primaryKey,
  text,
  timestamp,
  varchar,
} from 'drizzle-orm/mysql-core';
import { type AdapterAccount } from 'next-auth/adapters';

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const mysqlTable = mysqlTableCreator((name) => `docser_${name}`);

export const posts = mysqlTable(
  'post',
  {
    id: bigint('id', { mode: 'number' }).primaryKey().autoincrement(),
    name: varchar('name', { length: 256 }),
    createdById: varchar('createdById', { length: 255 }).notNull(),
    createdAt: timestamp('created_at')
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp('updatedAt').onUpdateNow(),
  },
  (example) => ({
    createdByIdIdx: index('createdById_idx').on(example.createdById),
    nameIndex: index('name_idx').on(example.name),
  })
);

export const users = mysqlTable('user', {
  id: varchar('id', { length: 255 }).notNull().primaryKey(),
  name: varchar('name', { length: 255 }),
  email: varchar('email', { length: 255 }).notNull(),
  emailVerified: timestamp('emailVerified', {
    mode: 'date',
    fsp: 3,
  }).default(sql`CURRENT_TIMESTAMP(3)`),
  image: varchar('image', { length: 255 }),
  role: mysqlEnum('role', ['contractor', 'employer']).$default(() => 'contractor'),
});

export const contracts = mysqlTable(
  'contract',
  {
    userId: varchar('userId', { length: 255 }).notNull(),
    adr: int('adr'),
    status: mysqlEnum('status', ['signed', 'unsigned', 'expired', 'archived']).$default(
      () => 'unsigned'
    ),
    createdAt: timestamp('created_at')
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp('updatedAt').onUpdateNow(),
  },
  (contracts) => ({
    userIdIdx: index('userId_idx').on(contracts.userId),
  })
);

export const userIdentities = mysqlTable(
  'userIdentity',
  {
    userId: varchar('userId', { length: 255 }).notNull(),
    firstname: varchar('firstname', { length: 255 }),
    lastname: varchar('lastname', { length: 255 }),
    idCard: varchar('id_card', { length: 12 }),
    address: varchar('address', { length: 255 }),
    createdAt: timestamp('created_at')
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp('updatedAt').onUpdateNow(),
  },
  (userIdentities) => ({
    userIdIdx: index('userId_idx').on(userIdentities.userId),
  })
);

export const accounts = mysqlTable(
  'account',
  {
    userId: varchar('userId', { length: 255 }).notNull(),
    type: varchar('type', { length: 255 }).$type<AdapterAccount['type']>().notNull(),
    provider: varchar('provider', { length: 255 }).notNull(),
    providerAccountId: varchar('providerAccountId', { length: 255 }).notNull(),
    refresh_token: text('refresh_token'),
    access_token: text('access_token'),
    expires_at: int('expires_at'),
    token_type: varchar('token_type', { length: 255 }),
    scope: varchar('scope', { length: 255 }),
    id_token: text('id_token'),
    session_state: varchar('session_state', { length: 255 }),
  },
  (account) => ({
    compoundKey: primaryKey(account.provider, account.providerAccountId),
    userIdIdx: index('userId_idx').on(account.userId),
  })
);

export const sessions = mysqlTable(
  'session',
  {
    sessionToken: varchar('sessionToken', { length: 255 }).notNull().primaryKey(),
    userId: varchar('userId', { length: 255 }).notNull(),
    expires: timestamp('expires', { mode: 'date' }).notNull(),
  },
  (session) => ({
    userIdIdx: index('userId_idx').on(session.userId),
  })
);

export const verificationTokens = mysqlTable(
  'verificationToken',
  {
    identifier: varchar('identifier', { length: 255 }).notNull(),
    token: varchar('token', { length: 255 }).notNull(),
    expires: timestamp('expires', { mode: 'date' }).notNull(),
  },
  (vt) => ({
    compoundKey: primaryKey(vt.identifier, vt.token),
  })
);

export const usersRelations = relations(users, ({ many, one }) => ({
  accounts: many(accounts),
  sessions: many(sessions),
  contracts: many(contracts),
  userIdentities: one(userIdentities),
}));

export const accountsRelations = relations(accounts, ({ one }) => ({
  user: one(users, { fields: [accounts.userId], references: [users.id] }),
}));

export const sessionsRelations = relations(sessions, ({ one }) => ({
  user: one(users, { fields: [sessions.userId], references: [users.id] }),
}));

export const contractRelations = relations(contracts, ({ one }) => ({
  user: one(users, { fields: [contracts.userId], references: [users.id] }),
}));

export const userIdentitiesRelations = relations(userIdentities, ({ one }) => ({
  user: one(users, { fields: [userIdentities.userId], references: [users.id] }),
}));