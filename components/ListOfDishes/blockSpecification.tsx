import {
    Specification,
    SpecificationSpan,
    MenuH2,
    SpecificationWrapper,
} from "../../pages/user/listOfDishes/stylesAllMenus"
import {
    specificationItems,
    ISpecificationItemsType,
} from "../../models/sideBar/sideBar"

const BlockSpecification = () => {
    const specificationNods = specificationItems.map(
        (item: ISpecificationItemsType) => (
            <Specification key={item.id}>
                {item.name}
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
