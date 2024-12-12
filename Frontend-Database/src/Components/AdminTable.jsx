import { useEffect, useState } from "react";
import "../Styles/Admin.css";
import api from "../api";
const store_id = "FA0DD174-73D7-404D-9AD9-C738934240FA";

const StaffTable = () => {
  const [selectedStaff, setSelectedStaff] = useState(null); // Lưu thông tin nhân viên được chọn
  const [isModalOpen, setIsModalOpen] = useState(false); // Quản lý modal
  const [staffData, setStaffData] = useState([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const fetchStaffData = async () => {
      const response = await api.get(
        `/user/staff/getInfo?store_id=${store_id}`
      );
      console.log(response);
      setStaffData(response.data);
    };
    fetchStaffData();
  }, []);

  //Thay đổi score trong ô input
  const handleScore = (e) => {
    setScore(parseInt(e.target.value));
  };

  //Submit thay đổi trên Form
  const handleSubmitForm = (e) => {
    e.preventDefault();
    selectedStaff.score = score;
    selectedStaff.feedback = e.target.feedback.value;

    const findStaff = staffData.find(
      (staff) => staff.e_id === selectedStaff.e_id
    );

    findStaff.score = selectedStaff.score;
    findStaff.feedback = selectedStaff.feedback;

    setStaffData([...staffData]);
    const evaluteStaff = async () => {
      const response = await api.post(
        `/user/staff/evaluate?e_id=${selectedStaff.e_id}`,
        {
          score: selectedStaff.score,
          feedbacks: selectedStaff.feedback,
        }
      );
      if (response.status === 201) {
        alert(
          `Successfully evalute score and feedback for employee ${selectedStaff.e_id}`
        );
      } else {
        alert("Fail to evalute");
      }
    };
    evaluteStaff();
    setSelectedStaff(null);
    closeModal();
  };

  // Mở modal và lưu thông tin nhân viên được chọn
  const openModal = (staff) => {
    setSelectedStaff({ ...staff }); // Sao chép dữ liệu để chỉnh sửa độc lập
    setScore(staff.score);
    setIsModalOpen(true);
  };

  // Đóng modal
  const closeModal = () => {
    setSelectedStaff(null);
    setIsModalOpen(false);
  };

  return (
    <div>
      <table className="staff-table">
        <thead>
          <tr>
            <th>Staff ID</th>
            <th>Store name</th>
            <th>Name</th>
            <th>Role</th>
            <th>Score</th>
          </tr>
        </thead>
        {staffData ? (
          staffData.map((staff, index) => (
            <tbody key={index}>
              <tr onClick={() => openModal(staff)}>
                <td>{staff.e_id}</td>
                <td>{staff.headquarter_name}</td>
                <td>{staff.last_name + " " + staff.first_name}</td>
                <td>{staff.e_position}</td>
                <td>{staff.score}</td>
              </tr>
            </tbody>
          ))
        ) : (
          <p>Not have data</p>
        )}
      </table>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Evaluate Staff</h3>
            <form onSubmit={handleSubmitForm}>
              <div>
                <label>Score:</label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  name="score"
                  onChange={handleScore}
                  value={score}
                />
              </div>
              <div>
                <label>Feedback:</label>
                <input type="text" name="feedback" />
              </div>

              <div className="modal-actions">
                <button
                  type="button"
                  onClick={() => {
                    closeModal();
                  }}
                  className="close-button"
                >
                  Close
                </button>
                <button type="submit" className="submit-button">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default StaffTable;
