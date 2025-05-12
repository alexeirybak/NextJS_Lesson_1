"use client";

//import { Submit } from "@/components/submitBtn";
import { FormState, createProduct } from "@/actions/products";
import { useActionState } from "react";

export default function AddProductPage() {
  const initialState: FormState = {
    errors: {},
    values: {
      title: "",
      price: "",
      description: "",
    },
  };

  const [state, formAction, isPending] = useActionState(
    createProduct,
    initialState
  );

  return (
    <form action={formAction} className="p-4 space-y-4 max-w-96">
      <div>
        <label className="text-white">
          Название
          <input
            type="text"
            className="block w-full p-2 text-black border rounded bg-white"
            name="title"
            defaultValue={state.values?.title || ""}
          />
        </label>
        {state.errors.title && (
          <p className="text-red-500">{state.errors.title}</p>
        )}
      </div>
      <div>
        <label className="text-white">
          Цена
          <input
            type="number"
            className="block w-full p-2 text-black border rounded bg-white"
            name="price"
            defaultValue={state.values?.price || ""}
          />
        </label>
        {state.errors.price && (
          <p className="text-red-500">{state.errors.price}</p>
        )}
      </div>
      <div>
        <label className="text-white">
          Описание
          <textarea
            className="block w-full p-2 text-black border rounded bg-white"
            name="description"
            defaultValue={state.values?.description || ""}
          />
        </label>
        {state.errors.description && (
          <p className="text-red-500">{state.errors.description}</p>
        )}
      </div>
      <button type="submit" disabled={isPending} className="bg-blue-500">
        {isPending ? "Отправляется" : "Отправить"}
      </button>
      {/* <Submit /> */}
    </form>
  );
}
