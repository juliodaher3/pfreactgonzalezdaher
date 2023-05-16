import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { ItemsContext } from "../../context/ItemsContext"

const CardChinpokomonComponent = ({ chinpokomonsData }) => {

  const [items, setItems] = React.useContext(ItemsContext)

  console.log(chinpokomonsData)
  console.log(items)

  const agregarAlCarrito = () => {
    let itemsAux = items;
    itemsAux.push(chinpokomonsData);
    setItems(itemsAux);
    console.log(items)
  }

  return (
    <Card sx={{ maxWidth: 345, m: 4 }}>
      <CardActionArea>
        <CardMedia component="img" image={chinpokomonsData.img} alt="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {chinpokomonsData.name}
          </Typography>

          <Typography gutterBottom variant="h5" component="div">
            {chinpokomonsData.desc} | {chinpokomonsData.type}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            $ {chinpokomonsData.price} | stock: {chinpokomonsData.stock}
          </Typography>
          <button onClick={() => agregarAlCarrito()}>Agregar al carrito</button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardChinpokomonComponent;