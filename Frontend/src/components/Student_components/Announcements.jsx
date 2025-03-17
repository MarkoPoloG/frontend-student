export default function Announcements(){
  return(
      <>
          <div className="p-4 w-75 mx-auto rounded border border-primary border-2" style={{backgroundColor: 'white'}}>
          <table className="table table-striped table-hover mx-auto">
              <thead>
                  <tr className="border-primary">
                      <th scope="col">Title</th>
                      <th scope="col">Action</th>
                  </tr>
              </thead>
              <tbody>
                  <tr className="border-primary">
                      <th scope="row">Important information for Math Exam</th>
                      <td><AnnouncementsDetails /></td>
                  </tr>
                  <tr className="border-primary">
                      <th scope="row">Bringing Lab Coat</th>
                      <td><AnnouncementsDetails /></td>
                  </tr>
              </tbody>
          </table>  
          </div>
      </>
  );
}


function AnnouncementsDetails(){
  return(
      <>
          <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
          View details
          </button>
          <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-lg">
                  <div className="modal-content mt-5">
                  <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">Important information for Math Exam</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                      <p>Dear Students,
                      <br />
                      We are pleased to announce that the upcoming Math Exam will take place on Friday, October 20th, 2024. Please find the details below:
                      <br />
                      Important Information:
                      <ul >
                          <li>Please arrive at least 15 minutes early to ensure a prompt start.</li>
                          <li>Please arrive at least 15 minutes early to ensure a prompt start.</li>
                          <li>The exam will cover Chapters 1-5 from the textbook. Make sure to review all relevant materials.</li>
                          <li>There will be a total of 50 multiple-choice questions. The exam is worth 100 points</li>
                          
                      </ul>
                      <br />
                      We wish you all the best in your preparation!
                      Best Regards,<br />
                      [Your Name]<br />
                      [Your Position]<br />
                      [School/Institution Name]<br />
                      [Contact Information]<br />
                      </p>
                  </div>
                  <div className="modal-footer">
                      <button type="button" className="btn btn-success" data-bs-dismiss="modal">Close</button>
                  </div>
                  </div>
              </div>
          </div>
      </>
  );
}