import React from "react";
import HeaderSections from "../../../../components/common/HeaderSection/HeaderSection";
import styles from "./Contact.module.scss";

export default function Contact(props) {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.content}>
        <img src={props.img} alt="Coffe Make" className={styles.coffe} />
        <div className={styles.block}>
          <HeaderSections
            classes={styles.header}
            title="have questions?"
            subtitle="Leave a request and we will contact you shortly"
          />

          <form>
            <div className="form-group">
              <input
                type="text"
                placeholder="Your Name"
                className={styles.input}
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                placeholder="Contact Number"
                className={styles.input}
              />
            </div>
            <div className="form-group">
              <button className={styles.button}>Send</button>
            </div>
          </form>

          {/* <ValidationForm id="contactForm" onSubmit={(e, formData) => {e.preventDefault(); this.handleForm(formData); }}>
                    <div className="form-group">
                        <TextInput
                            name="name"
                            id="name"
                            required
                            successMessage=""
                            errorMessage="Please enter your name"
                            className="form-control"
                            placeholder="your name"
                            autoComplete="off"
                            onChange={
                                this.handleFields
                            }
                        />
                        <div className="help-block with-errors"></div>
                    </div>
                    <div className="form-group">
                        <MaskWithValidation 
                            name="phone" 
                            id="phone"
                            className="form-control" 
                            required 
                            validator={(value) => value}
                            value={this.state.phone}
                            onChange={this.handleFields}
                            successMessage=""
                            placeholder="contact number"
                            autoComplete="off"
                            errorMessage={{validator: "Please enter contact number"}}
                            mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className={styles.button}>Send</button>
                        <div id="msgSubmit" className="h3 text-center hidden"></div>
                        <div className="clearfix"></div>
                    </div> 
                </ValidationForm>
                {this.state.successMsg !== "" ? (
                    <p className={styles.contactMsg}>
                        {this.state.successMsg}
                    </p>
                ) : null} */}
        </div>
      </div>
    </section>
  );
}

Contact.defaultProps = {
  img: require("../../../../resources/images/coffe_4.png"),
};
