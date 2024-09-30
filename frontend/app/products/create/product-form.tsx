"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useForm } from "react-hook-form";

import { createProduct } from "../api/product-api";

import { useRouter } from "next/navigation";

export function ProductForm() {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    await createProduct({ ...data, price: parseFloat(data.price) });
    router.push("/  ");
  });

  return (
    <form onSubmit={onSubmit}>
      <Label>Nombre de producto</Label>
      <Input {...register("name", { required: true })} />

      <Label>Descripción</Label>
      <Input {...register("description", { required: true })} />

      <Label>Precio</Label>
      <Input {...register("price", { required: true })} />

      <Label>Dirección URL de una imagen del producto</Label>
      <Input {...register("imageURL", { required: true })} />

      <Button>Agregar Producto</Button>
    </form>
  );
}
