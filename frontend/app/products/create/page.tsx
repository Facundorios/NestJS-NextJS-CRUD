import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function CardWithForm() {
  return (
    <div className="h-screen flex justify-center items-center">
      <Card className="w-[500px]">
        <CardHeader>
          <CardTitle>Agrega un Producto</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <Label htmlFor="name">Nombre de producto</Label>
            <Input id="name" type="text" />
            <Label htmlFor="description">Descripción</Label>
            <Input id="name" type="text" />

            <Label htmlFor="price">Precio</Label>
            <Input id="name" type="text" />

            <Label htmlFor="imageURL">
              Dirección URL de una imagen del producto
            </Label>
            <Input id="name" type="text" />
          </form>
          <Button className="mt-5">Agregar Producto</Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default CardWithForm;
