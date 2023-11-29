"use client"
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';


export function Cuerpo() {
  const { Formik } = formik;

  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    username: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    zip: yup.string().required(),
    file: yup.mixed().required(),
    terms: yup.bool().required().oneOf([true], 'terms must be accepted'),
  });

  return (
    <div className='cuerpo'>
      <Formik className='cuerpoForm'
        validationSchema={schema}
        onSubmit={console.log}
        initialValues={{
          firstName: '',
          lastName: '',
          username: '',
          city: '',
          state: '',
          zip: '',
          file: null,
        }}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <Form noValidate onSubmit={handleSubmit} className='cuerpoForm'>
            <Row className="mb-3">
              <Form.Group
                as={Col}
                md="4"
                controlId="validationFormik101"
                className="position-relative"
              >
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  name="Name"
                  value={values.firstName}
                  onChange={handleChange}
                  isValid={touched.firstName && !errors.firstName}
                />
                <Form.Control.Feedback tooltip>Correcto</Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                as={Col}
                md="4"
                controlId="validationFormik102"
                className="position-relative"
              >
                <Form.Label>Apelido</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  isValid={touched.lastName && !errors.lastName}
                />

                <Form.Control.Feedback tooltip>Correcto</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationFormikUsername2">
                <Form.Label>Correo</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="Correo"
                    aria-describedby="inputGroupPrepend"
                    name="username"
                    value={values.username}
                    onChange={handleChange}
                    isInvalid={!!errors.username}
                  />
                  <Form.Control.Feedback type="invalid" tooltip>
                    {errors.username}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group
                as={Col}
                md="8"
                className="position-relative">
                <Form.Label htmlFor="basic-url">Ingrese su linkedin</Form.Label>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon3">
                    https://www.linkedin.com/nombre/
                  </InputGroup.Text>
                  <Form.Control id="basic-url" aria-describedby="basic-addon3" />
                </InputGroup>
              </Form.Group>
              <Form.Group
                as={Col}
                controlId="formGridState"
                md="2"
                className="position-relative">
                <Form.Label>Edad</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Edad</option>
                  <option>- 14</option>
                  <option>15 a 17</option>
                  <option>18 a 24</option>
                  <option>25 a 35</option>
                  <option>+ 36</option>
                </Form.Select>
              </Form.Group>
              
            </Row>
            <Row>
              <Form.Group>
              <Form.Label>Tienes movilidad propia</Form.Label>
                {['radio'].map((type) => (
                  <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                      inline
                      label="si"
                      name="group1"
                      type={type}
                      id={`inline-${type}-1`}
                    />
                    <Form.Check
                      inline
                      label="no"
                      name="group1"
                      type={type}
                      id={`inline-${type}-2`}
                    />
                  </div>
                ))}
              </Form.Group>
              <Form.Group>
              <Form.Label>Buscas full time</Form.Label>
                {['radio'].map((type) => (
                  <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                      inline
                      label="si"
                      name="group1"
                      type={type}
                      id={`inline-${type}-1`}
                    />
                    <Form.Check
                      inline
                      label="no"
                      name="group1"
                      type={type}
                      id={`inline-${type}-2`}
                    />
                  </div>
                ))}
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group
                as={Col}
                md="4"
                controlId="validationFormik103"
                className="position-relative"
              >
                <Form.Label>Ciudad</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ciudad"
                  name="city"
                  value={values.city}
                  onChange={handleChange}
                  isInvalid={!!errors.city}
                />

                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.city}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                as={Col}
                md="3"
                controlId="validationFormik104"
                className="position-relative"
              >
                <Form.Label>Pais</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Pais"
                  name="state"
                  value={values.state}
                  onChange={handleChange}
                  isInvalid={!!errors.state}
                />
                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.state}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                as={Col}
                md="3"
                controlId="validationFormik105"
                className="position-relative"
              >
                <Form.Label>Area Magica</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="area magica"
                  name="zip"
                  value={values.zip}
                  onChange={handleChange}
                  isInvalid={!!errors.zip}
                />

                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.zip}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Form.Group className="position-relative mb-3">
              <Form.Label>Suba su Curriculum</Form.Label>
              <Form.Control
                type="file"
                required
                name="file"
                onChange={handleChange}
                isInvalid={!!errors.file}
              />
              <Form.Control.Feedback type="invalid" tooltip>
                {errors.file}
              </Form.Control.Feedback>
            </Form.Group>
            <Button type="submit">Enviar CV</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}