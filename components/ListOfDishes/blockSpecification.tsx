import {
    Specification, SpecificationSpan, MenuH2, SpecificationWrapper
} from "./listOfDishes.styles"
import {
    specificationItems,
    ISpecificationItemsType,
} from "@/models/sideBar/sideBar"

const BlockSpecification = () => {
    const specificationNods = specificationItems.map(
        (item: ISpecificationItemsType) => (
            <Specification key={item.id}>
                <div>{item.name}</div>
                <SpecificationSpan>{item.amount}</SpecificationSpan>
            </Specification>
        )
    )

    return (
      <>
        <MenuH2>Categories</MenuH2>
        <SpecificationWrapper>{specificationNods}</SpecificationWrapper>
      </>
    )
}
export default BlockSpecification
