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
  /*creo la funcion  para hacer una alerta de mensaje de error*/
  const schema = yup.object().shape({
    primerNombre: yup.string().required(),
    primerApellido: yup.string().required(),
    username: yup.string().required(),
    ciudad: yup.string().required(),
    pais: yup.string().required(),
    Trabajo: yup.string().required(),
    file: yup.mixed().required(),
  });

  return (
    <div className='cuerpo'>{/*le doy cla clase cuerpo para que tenga color la pagina */}
      <Formik className='cuerpoForm'
        validationSchema={schema}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          alert('Formulario enviado con éxito');
          setSubmitting(false);
        }}
        initialValues={{
          primerNombre: '',
          primerApellido: '',
          username: '',
          ciudad: '',
          pais: '',
          Trabajo: '',
          file: null,
        }}
      >{/* para que salga el error tiene que estar vacios los campos */}
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <Form noValidate onSubmit={handleSubmit} className='cuerpoForm'>
            <Row className="mb-5">{/*cada row se divide como un renglon */}
              <Form.Group
                as={Col}
                md="4"
                controlId="validationFormik101"
                className="position-relative"
              >{/*as se indica que columna----md indica el tamaño de largo */}
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  name="primerNombre"
                  value={values.primerNombre}
                  onChange={handleChange}
                  isValid={touched.primerNombre && !errors.primerNombre}
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
                  name="primerApellido"
                  value={values.primerApellido}
                  onChange={handleChange}
                  isValid={touched.primerApellido && !errors.primerApellido}
                />
                <Form.Control.Feedback tooltip>Correcto</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationFormikUsername2">
                <Form.Label>Correo</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text id="idCorreo">@</InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="Correo"
                    aria-describedby="idCorreo"
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
            <Row className="mb-5">
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
            <Row className="mb-5">{/*este row cuenta como dos renglones */}
              <Form.Group>
                <Form.Label>Tienes movilidad propia</Form.Label>
                <div key={`inline-radio`} className="mb-3">
                  <Form.Check
                    inline
                    label="si"
                    name="group1"
                    type="radio"
                    id={`inline-radio-1`}
                  />
                  <Form.Check
                    inline
                    label="no"
                    name="group1"
                    type="radio"
                    id={`inline-radio-2`}
                  />
                </div>
              </Form.Group>
              <Form.Group>
                <Form.Label>Buscas full time</Form.Label>
                <div key={`inline-radio`} className="mb-3">
                  <Form.Check
                    inline
                    label="si"
                    name="group2"
                    type="radio"
                    id={`inline-radio-1`}
                  />
                  <Form.Check
                    inline
                    label="no"
                    name="group2"
                    type="radio"
                    id={`inline-radio-2`}
                  />
                </div>
              </Form.Group>
            </Row>
            <Row className="mb-5">
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
                  name="ciudad"
                  value={values.ciudad}
                  onChange={handleChange}
                  isInvalid={!!errors.ciudad}
                />
                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.ciudad}
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
                  name="pais"
                  value={values.pais}
                  onChange={handleChange}
                  isInvalid={!!errors.pais}
                />
                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.pais}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                as={Col}
                md="3"
                controlId="validationFormik105"
                className="position-relative"
              >
                <Form.Label>Area Magica a solicitar empleo</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="area magica"
                  name="Trabajo"
                  value={values.Trabajo}
                  onChange={handleChange}
                  isInvalid={!!errors.Trabajo}
                />
                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.Trabajo}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-5">
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
            </Row>

            <Button type="submit">Enviar CV</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}