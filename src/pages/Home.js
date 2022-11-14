import { useNavigate, Link } from 'react-router-dom'

import { Container, Button } from 'react-bootstrap'

function Home() {
    const navigate = useNavigate();

    const handleNavigateToSignIn = () => {
        navigate("/signin");
    };

    return (
        <Container className="text-center">
            <p className="h1">Home</p>
            <p>
                Cras sit amet mauris ac urna pellentesque rhoncus sed nec felis. Sed
                augue tortor, pretium euismod massa eu, fringilla viverra ante. Proin ut
                nisl neque. In varius nibh eget diam pharetra, sed gravida sem commodo.
                Proin in tortor tristique lorem dignissim elementum. Quisque gravida
                augue quis aliquam ultrices. Nullam risus est, malesuada vitae pretium
                eu, congue a magna. Orci varius natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus. Donec et maximus tellus, sit
                amet hendrerit augue.
            </p>
            <Button onClick={handleNavigateToSignIn}>Click to Signin</Button>
        </Container>
        );
    }

export default Home;