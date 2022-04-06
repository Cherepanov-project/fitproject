import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Rating } from '@mui/material';
import DishChikenImg from '../images/DishChikenImg.png';
import Link from 'next/link';

import {
  MenuItemTitule,
  MenuItemDescrition,
  MenuRatingWrapper,
  MenuImg,
} from '../../pages/user/listOfDishes/stylesAllMenus';

const MenuItem = ({ namesFood, nutritionalValue, star, id }) => {
  return (
    <Link href={`/user/calendar/dieta/${star}`}>
      <Card
        sx={{
          width: 214,
          height: 196,
          margin: 1,
          marginTop: 10,
          overflow: 'visible',
          bgcolor: '#F0F7FF', 
          cursor: 'pointer'     
        }}
      >
        <MenuImg src={DishChikenImg.src}></MenuImg>
        <CardContent>
          <MenuItemTitule>{namesFood}</MenuItemTitule>
          <MenuItemDescrition>
            <div>
              <div>{nutritionalValue[0].value}</div>
              <span>{nutritionalValue[0].units}</span>
            </div>
            <div>
              <div>{nutritionalValue[1].value}</div>
              <span>{nutritionalValue[1].units}</span>
            </div>
            <div>
              <div>{nutritionalValue[2].value}</div>
              <span>{nutritionalValue[2].units}</span>
            </div>
            <div>
              <div>{nutritionalValue[3].value}</div>
              <span>{nutritionalValue[3].units}</span>
            </div>
          </MenuItemDescrition>
          <MenuRatingWrapper>
            <div>30 min cooktime</div>
            <Rating name="size-small" value={star} readOnly size="small" />
          </MenuRatingWrapper>
        </CardContent>
      </Card>
    </Link>
  );
};
export default MenuItem;