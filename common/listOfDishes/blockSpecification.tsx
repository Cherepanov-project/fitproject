import {
  Specification,
  SpecificationSpan,
  MenuH2,
} from '../../pages/user/listOfDishes/stylesAllMenus';

const blockSpecification = () => {
  const specificationItems = [
    { Salads: 320 },
    { 'Meals with meat': 320 },
    { 'Meals with chicken': 320 },
    { 'Meals with seafood': 320 },
  ];

  const specificationNods = specificationItems.map((item: any) => (
    <Specification key={Math.random()}>
      {Object.keys(item)[0]}
      <SpecificationSpan>{Object.values(item)[0]}</SpecificationSpan>
    </Specification>
  ));

  return (
    <div>
      <MenuH2>Categories</MenuH2>
      {specificationNods}
    </div>
  );
};
export default blockSpecification;
