import axios from "axios";

import { useState, useEffect } from 'react';

import { Card, Row, CardBody, CardTitle, Button, DropdownButton, Dropdown } from 'react-bootstrap';

 

const GiphyViewer = () => {

 

    const GIPHY_URL = 'https://api.giphy.com/v1/gifs';

    const API_KEY = 'eRzYJIFx5dSYI0RX9UCsPtHnlgbNQVjQ';

    
 

    const [gifs, setGifs] = useState([]);

    const [term, setTerm] = useState("");

    const [limit,setLimit] = useState(15)

 

    useEffect(() => {
        getTrending();
    }, []);

 

    // Create a component to render individual GIF cards.

    const GIFCard = (props) => (

        <Card>

            <Card.Img variant="top" src={props.image} alt={props.title} />

            <CardBody>

                <CardTitle><a href={props.url}>{props.title}</a></CardTitle>

            </CardBody>

        </Card>

    );

        const handleTrendingClick = () => {
            getTrending();
        }

        const handleRandomClick = () => {
            axios.get(`${GIPHY_URL}/random?api_key=${API_KEY}`)

            .then((response) => {

                setGifs([response.data.data]);

            })

            .catch((error) => {

                console.log(error);

            });
        }

        const getTrending = () => {
            axios.get(`${GIPHY_URL}/trending?api_key=${API_KEY}&limit=${limit}`)

            .then((response) => {

                setGifs(response.data.data);

            })

            .catch((error) => {

                console.log(error);

            });
        }

        const handleChange = (e) => {
           setTerm(e.target.value)
        };

        const handleClick = () => {
            searchGif();
        }

        const handleKeyUp = (e) => {
            if(e.key === 'Enter'){
                searchGif();
            }
            
        }

        const searchGif = () => {

            if(!term){
                alert("please enter a search term");
                return;
            }

            axios.get(`${GIPHY_URL}/search?api_key=${API_KEY}&q=${term}&limit=${limit}`)

            .then((response) => {

                setGifs(response.data.data);

            })

            .catch((error) => {

                console.log(error);

            });

            setTerm("")

        }

        const handleSelect = (amount) => {
            setLimit(amount)
        }
    // Map the fetched GIF data to create an array of GIFCard components.

    const gifComponents = gifs.map((g) => (

        <GIFCard key={g.id} title={g.title} url={g.url} image={g.images.fixed_width.url} />

    ));

 

    // Return the array of GIFCard components.

    return (

        <>
        <div className="search">
            <input type="text" value={term} onChange={handleChange} onKeyUp={handleKeyUp} className="border" />
            <Button variant="primary" className="ml-2" onClick={handleClick}>Search</Button>
            <Button variant="info" className="ml-2" onClick={handleTrendingClick}>Trending</Button>
            <Button variant="danger" className="ml-2" onClick={handleRandomClick}>RandomGif</Button>
            <DropdownButton className="ml-2" onSelect={handleSelect}  >
                    <Dropdown.Item eventKey={15}>15</Dropdown.Item>
                    <Dropdown.Item eventKey={20}>20</Dropdown.Item>
                    <Dropdown.Item eventKey={25}>25</Dropdown.Item>
                    <Dropdown.Item eventKey={50}>50</Dropdown.Item>
            </DropdownButton>
        </div>
        
            <Row className="g-4" md={3} xs={1}>
            {gifComponents}
            </Row>
            

        </>

    );

}

 

export default GiphyViewer;