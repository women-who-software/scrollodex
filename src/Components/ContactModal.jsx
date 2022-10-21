import React from 'react'
import './Modal.scss'

export const ContactModal = ({ setShowModal }) => {
  return (
    <>
    <div className="darkModalBG" onClick={() => setShowModal(false)} />
      <div className="modalCentered">
        <div className="modalBox">
          <div className="modalHeader">
            <h2 className="heading">Contact Us</h2>
          </div>
          <button className="closeBtn" onClick={() => setShowModal(false)}>
            Close
          </button>
          <div className="modalContent">
            <form>
              <div class="form-group">
                <label for="commentName">Your Name</label>
                <input type="name" className="form-control mb-2" id="commentName" placeholder="Enter name" />
              </div>
              <div class="form-group">
                <label for="commentEmail">Email Address</label>
                <input type="email" className="form-control mb-2" id="commentEmail" placeholder="Enter email address" />
              </div>
              <div class="form-group">
                <label for="commentBody">Message</label>
                <textarea className="form-control mb-4 commentArea" id="commentBody" rows="3" placeholder="Please ask us about our favorite cheese and wine pairings"></textarea>
              </div>
              <div className="d-flex flex-row justify-content-around">
                <button type="submit" className="btn btn-primary">Submit</button>
                <button className="btn btn-danger" onClick={() => setShowModal(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactModal;