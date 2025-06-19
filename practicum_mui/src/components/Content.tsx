import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import BuildCard from './BuildCard';
import structures from "../data";
const cardData = [structures[0], structures[1]]
function Content() {
    return (
        <Container maxWidth="xl">
            <Grid container spacing={{ xs: 3, md: 6 }}>
                {cardData.map((item, index) => (
                    <Grid key={index} size={{ xs: 12 }} >
                        <BuildCard building={ item } index={ index }/> 
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
export default Content;