import {
  Specification,
  SpecificationSpan,
  MenuH2,
} from '../../pages/user/listOfDishes/stylesAllMenus';

import { SpecificationItemsType } from '../../model/dish/dish';

const blockSpecification = () => {
  const specificationItems = [
    { id: 'Salads', name: 'Salads', amount: 320 },
    { id: 'meat', name: 'Meals with meat', amount: 320 },
    { id: 'chicken', name: 'Meals with chicken', amount: 320 },
    { id: 'seafood', name: 'Meals with seafood', amount: 320 },
  ];

  const specificationNods = specificationItems.map(
    (item: SpecificationItemsType) => (
      <Specification key={item.id}>
        {item.name}
        <SpecificationSpan>{item.amount}</SpecificationSpan>
      </Specification>
    )
  );

  return (
    <div>
      <MenuH2>Categories</MenuH2>
      {specificationNods}
    </div>
  );
};
export default blockSpecification;
