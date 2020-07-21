import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {Form, Message, Select} from 'semantic-ui-react';
import Markdown from '../../components/Markdown';

import styles from './index.css';
import Svg from 'react-svg-inline'; // <Svg svg={ twitterSvg } cleanup />
import send from '../../../content/assets/icons/send.svg';

const FORM_SUBMIT_ENDPOINT =
  'https://nw9m04mzw2.execute-api.eu-central-1.amazonaws.com/prod/';

class AForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSent: false,
      medicCount: 1,
      values: {},
    };
  }
  static propTypes = {
    data: PropTypes.object,
  };
  handleValidate = (e) => {
    if (
      this.state.values.Email &&
      /\S+@\S+\.\S+/.test(this.state.values.Email)
    ) {
      this.setState({
        isSent: true,
        error: undefined,
      });
    } else {
      e.preventDefault();
      this.setState({
        isSent: false,
        error: 'Email',
      });
    }
  };
  handleChange = (event, {name, type, value}) => {
    this.setState((state, props) => ({
      values: {
        ...state.values,
        [name]: value,
      },
    }));
  };
  handleSelectChange = (event) => {
    const {name, value} = event.target;
    this.setState((state, props) => ({
      values: {
        ...state.values,
        [name]: value,
      },
    }));
  };
  handleAddMed = (e) => {
    e.preventDefault();
    this.setState((prevState, props) => ({
      medicCount: prevState.medicCount + 1,
    }));
  };
  handleRmMed = (e) => {
    e.preventDefault();
    this.setState((prevState, props) => ({
      medicCount: prevState.medicCount - 1,
    }));
  };

  render() {
    const {values} = this.state;
    const {data} = this.props;
    const currentUrl =
      typeof window !== 'undefined' && window.location.toString();
    const formName = data.subject ? data.subject : 'Formulaire de contact';
    const subject = `${formName}: message de ${values['Nom'] || "quelqu'un"} ${
      values['Prénom'] || ''
    }`;
    return (
      <div className={styles.container}>
        <h2>{data.title ? data.title : 'Laisser un message'}</h2>
        {data.description && (
          <div className={styles.desc}>
            <Markdown className={styles.desc} text={data.description} />
          </div>
        )}

        <Form
          success={this.state.isSent}
          error={!!this.state.error}
          action={FORM_SUBMIT_ENDPOINT}
          method="POST"
          className={styles.form}>
          <input
            type="hidden"
            name="_to"
            value="e95edbfdd389793c0e04e1600c33560e"
          />
          <input type="hidden" name="_subject" value={subject} />
          <Form.Group widths="equal">
            <Form.Input
              name="Nom"
              label="Nom :"
              placeholder="Votre Nom"
              onChange={this.handleChange}
            />
            <Form.Input
              name="Prénom"
              label="Prénom :"
              placeholder="Votre Prénom"
              onChange={this.handleChange}
            />
            <Form.Input
              name="Email"
              label="Email :"
              placeholder="Votre Email"
              onChange={this.handleChange}
            />
            <input type="hidden" name="_replyTo" value={values['Email']} />
          </Form.Group>
          <input type="hidden" name="_redirect" value={currentUrl} />
          <input type="text" name="_honeypot" style={{display: 'none'}} />
          <Form.Group widths="equal">
            {data.telephone && (
              <Form.Input
                name="Téléphone"
                label={data.telephone.titre}
                placeholder={data.telephone.aide}
                onChange={this.handleChange}
              />
            )}
            {data.naissance && (
              <Form.Input
                name="Date_de_naissance"
                label={data.naissance.titre}
                placeholder={data.naissance.aide}
                onChange={this.handleChange}
              />
            )}
          </Form.Group>
          {data.medecin && (
            <Form.Field
              name="Médecin"
              label={data.medecin.titre}
              placeholder={data.medecin.aide}
              control="select"
              defaultValue=""
              onChange={this.handleSelectChange}>
              <option value="" className={styles.hide} disabled>
                {data.medecin.aide}
              </option>
              {data.medecin.liste.map((medecin) => (
                <option key={medecin} value={medecin}>
                  {medecin}
                </option>
              ))}
            </Form.Field>
          )}
          {data.date && (
            <Form.Input
              name="Date"
              label={data.date.titre}
              placeholder={data.date.aide}
              onChange={this.handleChange}
            />
          )}
          {data.medicament && (
            <div>
              {[...Array(this.state.medicCount)].map((val, index) => (
                <Form.Group key={index} widths="equal">
                  <Form.Input
                    name={`Medicament_${index + 1}`}
                    label={`${data.medicament.titre} ${index + 1}`}
                    placeholder={data.medicament.aide}
                    onChange={this.handleChange}
                  />
                  <Form.Input
                    name={`Quantite_${index + 1}`}
                    label="Quantité"
                    placeholder="La quantitié voulue"
                    onChange={this.handleChange}
                  />
                </Form.Group>
              ))}
              <Form.Group widths="equal">
                <Form.Button onClick={this.handleAddMed} primary>
                  Ajouter un médicament
                </Form.Button>
                {this.state.medicCount !== 1 && (
                  <Form.Button onClick={this.handleRmMed} primary>
                    Supprimer un médicament
                  </Form.Button>
                )}
              </Form.Group>
            </div>
          )}
          {data.message && (
            <Form.TextArea
              name="Message"
              label={data.message.titre}
              placeholder={data.message.aide}
              onChange={this.handleChange}
            />
          )}
          <Form.Checkbox
            name="Newsletter"
            label="Je souhaite recevoir des nouvelles de la MMSG"
          />
          <Message
            success
            header="Message envoyé"
            content="Nous vous répondons dans les plus brefs délais"
          />
          <Message
            error
            header="Message non envoyé"
            content={`Le champ suivant est obligatoire: ${this.state.error}`}
          />
          <Form.Button primary size="large" onClick={this.handleValidate}>
            <Svg className={styles.svg} svg={send} cleanup height="1.5rem" />
            <span className={styles.buttonText}>Envoyer</span>
          </Form.Button>
        </Form>
      </div>
    );
  }
}
AForm.contextTypes = {
  metadata: PropTypes.object.isRequired,
};

export default AForm;
