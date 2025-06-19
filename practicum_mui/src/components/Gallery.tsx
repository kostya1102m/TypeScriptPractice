import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import structures from "../data";
const imgData = [structures[2], structures[3], structures[4], structures[5]]

function Gallery() {
    return (
        <Container maxWidth="xl">
            <Box sx={{ my: 1 }}>
                <Grid container spacing={1}>
                    {/* Первая большая картинка */}
                    <Grid size={{ xs: 12 }} sx={{ mb: 1 }}>
                        <Box
                            sx={{
                                position: 'relative',
                                overflow: 'hidden',
                                '&:hover img': {
                                    transform: 'scale(1.05)',
                                    transition: 'transform 0.3s ease-in-out',
                                },
                            }}
                        >
                            <img
                                src={imgData[0].img}
                                alt={imgData[0].title}
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    display: 'block',
                                    borderRadius: '4px',
                                }}
                                loading="lazy"
                            />
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    position: 'absolute',
                                    bottom: 0,
                                    width: '100%',
                                    bgcolor: 'rgba(0, 0, 0, 0.7)',
                                    color: 'white',
                                    p: 1,
                                    textAlign: 'center',
                                }}
                            >
                                {imgData[0].title}
                            </Typography>
                        </Box>
                    </Grid>
                    {/* Три маленькие картинки в ряд */}
                    {imgData.slice(1, 4).map((item, index) => (
                        <Grid key={item.img} size={{ xs: 12, lg: 4 }} sx={{ mt: 1 }}>
                            <Box
                                sx={{
                                    position: 'relative',
                                    overflow: 'hidden',
                                    '&:hover img': {
                                        transform: 'scale(1.05)',
                                        transition: 'transform 0.3s ease-in-out',
                                    },
                                }}
                            >
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                        display: 'block',
                                        borderRadius: '4px',
                                    }}
                                    loading="lazy"
                                />
                                <Typography
                                    variant="subtitle2"
                                    sx={{
                                        position: 'absolute',
                                        bottom: 0,
                                        width: '100%',
                                        bgcolor: 'rgba(0, 0, 0, 0.7)',
                                        color: 'white',
                                        p: 1,
                                        textAlign: 'center',
                                    }}
                                >
                                    {item.title}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
}

export default Gallery;