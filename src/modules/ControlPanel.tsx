'use client'


import { sendMessage, StrongMessage } from "@/api/send";
import { TFormSend } from "@/types/form.type";
import { useForm } from "react-hook-form";


const ControlPanel = () => {
  const {register, reset, handleSubmit} = useForm<TFormSend>()

  const onSubmit = async(data: TFormSend) => {
    await sendMessage(data.text)
    reset()
  }
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-5">
      <h1 className="text-4xl font-bold ">Панель управления</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 justify-center ">
        <textarea
          className="border-2 border-pink-500/50 p-2 text-2xl font-bold rounded-2xl"
          placeholder="Текст публикации"
          {...register('text')}
          
        />
        <button className="bg-pink-50/70 p-2 rounded-2xl hover:scale-110 active:scale-90 transition-transform ease-in-out duration-300">
          Отправить
        </button>
      </form>

      <button onClick={()=>{StrongMessage()}} className="bg-red-500/70 text-white p-5 rounded-3xl text-3xl font-bold hover:scale-110 active:scale-90 transition-transform ease-in-out duration-300">
        Экстренная кнопка
      </button>
    </div>
  );
};

export default ControlPanel;
