"use client";

import { checkPassword } from "@/action";
import { isPassword } from "@/slice/formLoginSlice";
import { TFormLogin } from "@/types/form.type";
import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

const FormLogin = () => {
    

  const router = useRouter();
  const dispatch = useDispatch();


    


  
  const { register, handleSubmit, formState } = useForm<TFormLogin>({
    reValidateMode: "onSubmit",
  });

  //Проверка
  const onSubmit = async (data: TFormLogin) => {
    const fd = new FormData();
    fd.set("password", data.password);
    const ok = await checkPassword(fd);
    

    if (ok) {
      localStorage.setItem("password", "true");
      router.push("/a");
      dispatch(isPassword());
    }
  };



  const passwordError = formState?.errors["password"]?.message;
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-10 justify-center items-center"
    >
      <div>
        <input
          className="border-2 border-black/50 p-2 text-2xl font-bold rounded-2xl "
          type="password"
          placeholder="Enter Your Password"
          {...register("password", {
            required: "Пароль обязателен",
            pattern: {
              value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
              message: "Минимум 8 символов, буквы и цифры",
            },
          })}
        />
        {passwordError && (
          <p className="text-red-500/50 font-mono">{passwordError}</p>
        )}
      </div>
      <button className="bg-pink-50/70 p-2 rounded-2xl hover:scale-110 active:scale-90 transition-transform ease-in-out duration-300">
        Авторизоваться
      </button>
    </form>
  );
};

export default FormLogin;
