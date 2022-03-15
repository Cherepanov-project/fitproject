import {
  Specification,
  SpecificationSpan,
  MenuH2,
} from '../../pages/user/listOfDishes/stylesAllMenus';
import {
  specificationItems,
  SpecificationItemsType,
} from '../../model/sideBar/sideBar';

const blockSpecification = () => {
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
