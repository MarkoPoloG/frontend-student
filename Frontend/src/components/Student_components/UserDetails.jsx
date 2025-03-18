// src/components/student_components/UserDetails.jsx
export default function UserDetails() {
    return (
      <>
        <div className="card w-75 mx-auto p-3 border border-2 border-primary">
          <img src="./images/avatar.jpg" className="card-img-top border border-2" alt="Student Avatar" style={{ display: 'block', maxHeight: '20vh', maxWidth: '20%' }} />
          <div className="card-body">
            <h5 className="card-text h5">Brian Tran</h5>
            <p>ID: 104023496<br />
              Student<br />
              Mail: 104023496@student.swin.edu.au<br />
              +616969696969<br />
              Address: NOT LEAKING ADDRESS LOL
            </p>
          </div>
        </div>
      </>
    );
  }
  