export default function Announcements({ limit = null }) {
    const announcements = [
      { title: "Important information for Math Exam" },
      { title: "Bringing Lab Coat" },
      { title: "School Trip Details" },
      { title: "Sports Day Schedule" },
      { title: "Library Closure Notice" }
    ];

    const displayedAnnouncements = limit ? announcements.slice(0, limit) : announcements;
  
    return (
      <>
        <div className="p-4 w-75 mx-auto rounded border border-primary border-2" style={{ backgroundColor: "white" }}>
          <table className="table table-striped table-hover mx-auto">
            <thead>
              <tr className="border-primary">
                <th scope="col">Title</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {displayedAnnouncements.map((announcement, index) => (
                <tr key={index} className="border-primary">
                  <th scope="row">{announcement.title}</th>
                  <td>
                    <AnnouncementsDetails title={announcement.title} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
  
  function AnnouncementsDetails({ title }) {
    return (
      <>
        <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target={`#modal-${title.replace(/\s+/g, '-')}`}>
          View details
        </button>
        <div className="modal fade" id={`modal-${title.replace(/\s+/g, '-')}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content mt-5">
              <div className="modal-header">
                <h5 className="modal-title">{title}</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <p>Details about {title} will be displayed here.</p>
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
  