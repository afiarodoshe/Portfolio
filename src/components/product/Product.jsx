import "./product.css";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';


const Product = () => {
  return (
    <div className="p">
      <h1 className="p-centre">Research and Project Overview</h1>
      <CardGroup>
        <Card style={{ height: '220px' }}>
          <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Card border="secondary" style={{ border: '20px' }}>
              <Card.Title>Analyzing Web Application Vulnerability
                of Educational Institutions in Bangladesh</Card.Title>
              <Card.Text>
                This study aims to detect vulnerabilities of the educational websites in Bangladesh and
                analyze which scanning tool provides more accurate results.
              </Card.Text>
              <Button variant="success"> Paper
                <Card.Link href="https://drive.google.com/file/d/1GQqnS_r0Vfd24nFM--oGWJt1ebGl1wFw/view?usp=sharing">Redirect</Card.Link>
              </Button>
            </Card>
          </Card.Body>
        </Card>
        <Card style={{ height: '220px' }}>
          <Card border="secondary" style={{ border: '20px' }}>
            <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <Card.Title>Contrast Enhancement of Low Light Image</Card.Title>
              <Card.Text>
                Here we discussed about enhancement of different
                low light images using Histogram Equalization (HE) and Illumination
                Adjustment. We wanted to remove the noise of the old images using
                Histogram Equalization (HE) and Illumination Adjustment.
              </Card.Text>

              <Button variant="success">Paper
                <Card.Link href="https://drive.google.com/drive/u/2/folders/1d9dDrL8yh957p9lDK23pztyiefDtAc5G">Redirect</Card.Link>
              </Button>
            </Card.Body>
          </Card>
        </Card>
      </CardGroup>
      <CardGroup>
        <Card style={{ height: '220px' }}>
          <Card border="secondary" style={{ border: '20px' }}>
            <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <Card.Title>Krish-e</Card.Title>
              <Card.Text>
                An e-platform for farm mechanisation to improve food security and
                livelihood.User can make purchases an also  sell their Agri-related
                commodities on this app. This application was build to revove the middleman
                in the business and provide fresh food to the customer.
              </Card.Text>

              <Button variant="success">Github Link
                <Card.Link href="https://github.com/afiarodoshe/krishe">Redirect</Card.Link>
              </Button>
            </Card.Body>
          </Card>
        </Card>
        <Card style={{ height: '220px' }}>
          <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Card border="secondary" style={{ border: '20px' }}>
              <Card.Title>Puran-o</Card.Title>
              <Card.Text>
                PURAN-O is an online second hand book selling and buying app.
                In this application anyone can open an account where he can upload his copy of
                book to sell . Similarly, if anyone wants to buy any copy , he can just search
                it using his account.
              </Card.Text>
              <Button variant="success">Github Link
                <Card.Link href="https://github.com/afiarodoshe/Puran-o">Redirect</Card.Link>
              </Button>
            </Card>
          </Card.Body>
        </Card>
      </CardGroup>
      <CardGroup>
        <Card style={{ height: '220px' }}>

          <Card border="secondary" style={{ border: '20px' }}>
            <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <Card.Title>Jontro</Card.Title>
              <Card.Text>
                It is an e commerce App named jontro. Here an user can see available items,add items to cart.
                After adding items, user can go to cart to see the added items and increase or decrease the quantity.
                In checkout after providing address details. After payment we will a confirmation.
              </Card.Text>

              <Button variant="success">Github Link
                <Card.Link href="https://github.com/afiarodoshe/Jontro">Redirect</Card.Link>
              </Button>
            </Card.Body >
          </Card>
        </Card>
        <Card style={{ height: '220px' }}>
          <Card border="secondary" style={{ border: '20px' }}>
            <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <Card.Title>Student Database</Card.Title>
              <Card.Text>
                This is a backend database application for students. It uses token bases
                authentication by generating a jwt token for token. It stores details of the
                the students.We can add,retrive,nodify and delete data from this application.
              </Card.Text>

              <Button variant="success">Github Link
                <Card.Link href="https://github.com/afiarodoshe/studentDB">Redirect</Card.Link>
              </Button>
            </Card.Body >
          </Card>
        </Card>
      </CardGroup>
      <CardGroup>
        <Card style={{ height: '220px' }}>
          <Card border="secondary" style={{ border: '20px' }}>
            <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <Card.Title>Calculator</Card.Title>
              <Card.Text>
                This is an simple calculator app. I made this app in order to practice regression
                and mutation testing on it. I used jest framework for regression testing and stryker for
                mutation testing. Ir gives a clear idea of both testing types also gives a reort.
              </Card.Text>

              <Button variant="success">Github Link
                <Card.Link href="https://github.com/afiarodoshe/Calculator">Redirect</Card.Link>
              </Button>
            </Card.Body>
          </Card>
        </Card>
        <Card>
          <Card border="secondary" style={{ border: '20px' }}>
            <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <Card.Title>UI/UX</Card.Title>
              <Card.Text>
                Some practice UI mockup.I used Figma to make this prototypes. In the messenger ui we have to use fingerprint to
                login then we can see the messeges. For Animal DB it shoes the information of animals.
                Then I tried to make thi Ui of Foodpanda app.
              </Card.Text>

              <ButtonGroup aria-label="Basic example">
                <Button variant="success">Messenger
                  <Card.Link href="https://www.figma.com/proto/q6qqLG6xSyCkjo7svGllpb/Lab2_170042029?scaling=scale-down&page-id=0%3A1&starting-point-node-id=2%3A10&node-id=2%3A10">Redirect</Card.Link>
                </Button>
                <Button variant="success">Animal DB
                  <Card.Link href="https://www.figma.com/proto/vwsz625c9LMtQC864PYtTz/Lab-4?node-id=5%3A245&scaling=min-zoom&page-id=5%3A53&starting-point-node-id=5%3A60">Redirect</Card.Link>
                </Button>
                <Button variant="success">Foodpanda
                  <Card.Link href="https://www.figma.com/proto/09zydG15Me9L38NElMfW7d/Labfinal_170042029?scaling=min-zoom&page-id=0%3A1&starting-point-node-id=2%3A46&node-id=2%3A46">Redirect</Card.Link>
                </Button>
              </ButtonGroup>
            </Card.Body>
          </Card>
        </Card>
      </CardGroup>
    </div>
  );
};

export default Product;