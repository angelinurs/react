import styled from "@emotion/styled";
import {useDispatch} from "react-redux";
import { testAction } from "../lib/store/test";

const Box = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 5rem;
`;

const HomePage = () => {
    const dispatch = useDispatch();

    const onDispatch = () => 
        dispatch( testAction( "This is Redux TEST Action" ));

    return (
        <Box>
            <button type="button" onClick={onDispatch}>
                BUTTON
            </button>
        </Box>
    );
};

export default HomePage;