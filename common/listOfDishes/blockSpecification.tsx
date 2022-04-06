import {
  Specification,
  SpecificationSpan,
  MenuH2,
  SpecificationWrapper
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
    <>
      <MenuH2>Categories</MenuH2>
      <SpecificationWrapper>
      {specificationNods}
    </SpecificationWrapper>
    </>
  );
};
export default blockSpecification;
