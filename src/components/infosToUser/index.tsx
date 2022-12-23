import logo from "../../assets/burguer-kenzie.svg";
import dots from "../../assets/dots.svg";
import { FiShoppingBag } from "react-icons/fi";
import { DotsBG, Infos, InfosBagBG, InfosMain } from "../../styles/infos/infos"
import { ParagraphMini } from "../../styles/typography"

export const InfosToUser = () => {
    return(
        <Infos>
            <img src={logo} width="243px"></img>
            <InfosMain>
            <InfosBagBG>
                <FiShoppingBag/>
            </InfosBagBG>
            <ParagraphMini>
                A vida é como um sanduíche, é preciso recheá-la com os{" "}
                <span>melhores</span> ingredientes.
            </ParagraphMini>
            </InfosMain>
            <DotsBG>
            <img src={dots} />
            </DotsBG>
        </Infos>
    )
}