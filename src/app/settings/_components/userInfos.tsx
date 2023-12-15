"use client"

import { Controller, useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from "@/components/ui/button";
import { api } from "@/trpc/react";
import type { ChangeEventHandler } from "react";

type FormValues = {
  firstname: string,
  lastname: string,
  cin0: string,
  cin1: string,
  cin2: string,
  cin3: string,
  cin4: string,
  cin5: string,
  cin6: string,
  cin7: string,
  cin8: string,
  cin9: string,
  cin10: string,
  cin11: string,
  birth_date: Date,
};

export const UserInfos = () => {
  const { register, control, handleSubmit, setFocus } = useForm<FormValues>();
  const { mutateAsync, isLoading } = api.user.create.useMutation();

  const onSubmit = async (data: FormValues) => {
    const cin = `${data.cin0}${data.cin1}${data.cin2}${data.cin3}${data.cin4}${data.cin5}${data.cin6}${data.cin7}${data.cin8}${data.cin9}${data.cin10}${data.cin11}`;
    const lastname = data.lastname;
    const birth_date = data.birth_date;
    const firstname = data.firstname;

    await mutateAsync({cin, lastname, birth_date, firstname});
  };

  const handleSend = ( ) =>{
    if(isLoading){
      return "Loading..."
    }else{
      return "Send"
    }
  };

  const handle: (target?: "cin0" | "cin1" | "cin2" | "cin3" | "cin4" | "cin5" | "cin6" | "cin7" | "cin8" | "cin9" | "cin10" | "cin11")
    => ChangeEventHandler<HTMLInputElement> = (target): ChangeEventHandler<HTMLInputElement> => (e) => {
    if (e.target.value.length > 0 && target) {
      setFocus(target);
    }

    return e;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card className="w-[350px]" >
        <CardHeader>
          <CardTitle>Informations</CardTitle>
          <CardDescription>Enter your information here that corresponds to the text field</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label>Firstname</Label>
              <Input id="firstname" placeholder="Firstname here" {...register('firstname')}/>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label>Lastname</Label>
              <Input id="lastname" placeholder="Lastname here" {...register('lastname')}/>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label>CIN</Label>
              <div className="flex w-full">
                <Input className="p-2 rounded-e-none" maxLength={1} {...register('cin0', { onChange: handle('cin1')})}/>
                <Input className="p-2 rounded-none" maxLength={1} {...register('cin1', { onChange: handle('cin2')})}/>
                <Input className="p-2 rounded-none" maxLength={1} {...register('cin2', { onChange: handle('cin3')})}/>
                <Input className="p-2 rounded-none" maxLength={1} {...register('cin3', { onChange: handle('cin4')})}/>
                <Input className="p-2 rounded-none" maxLength={1} {...register('cin4', { onChange: handle('cin5')})}/>
                <Input className="p-2 rounded-none" maxLength={1} {...register('cin5', { onChange: handle('cin6')})}/>
                <Input className="p-2 rounded-none" maxLength={1} {...register('cin6', { onChange: handle('cin7')})}/>
                <Input className="p-2 rounded-none" maxLength={1} {...register('cin7', { onChange: handle('cin8')})}/>
                <Input className="p-2 rounded-none" maxLength={1} {...register('cin8', { onChange: handle('cin9')})}/>
                <Input className="p-2 rounded-none" maxLength={1} {...register('cin9', { onChange: handle('cin10')})}/>
                <Input className="p-2 rounded-none" maxLength={1} {...register('cin10', { onChange: handle('cin11')})}/>
                <Input className="p-2 rounded-s-none" maxLength={1} {...register('cin11', { onChange: handle()})}/>
              </div>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label>Birth date</Label>
                <Controller
                  control={control}
                  {...register('birth_date')}
                  name='birth_date'
                  render={({ field }) => (
                    <div className="flex ">
                      <DatePicker
                        className="bg-transparent border-solid border-slate-500 border rounded-md p-1 ps-3 w-28"
                        placeholderText='MM/DD/YY'
                        onChange={(date: Date) => field.onChange(date)}
                        selected={field.value}
                      />
                    </div>
                  )}
                />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button type="submit" variant="outline">{handleSend()}</Button>
        </CardFooter>
      </Card>
    </form>
  );
}; 
