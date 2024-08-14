
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admission Enquiry Form</title>
    <link rel="stylesheet" href="styles.css">
</head>

<body>
    <!--Header-->
    <div class="header">
        <div class="top-bar">
            <p>Accredited by NAAC 'A' Grade</p>
        </div>
        <div class="main-header">
            <img src="logo.png" alt="Institute Logo" class="logo">
            <div class="header-info">
                <h1>S B Jain Institute of Technology Management and Research</h1>
                <p>An Autonomous Institute<br> Affiliated to RTMNU Nagpur University, Nagpur.<br> Approved by NBA New Delhi and Govt. of Maharashtra.</p>
            </div>
            <div class="contact-info">
                <p><span class="icon">📞</span> CALL US <br>9890324229</p>
                <p><span class="icon">✉️</span> EMAIL <br>registrar@sbjit.co.in</p>
            </div>
        </div>
        <div class="navbar">
            <ul>
                <li><a href="#">HOME</a></li>
                <li><a href="#">ABOUT US</a></li>
                <li><a href="#">ADMISSION</a></li>
                <li><a href="https://harshaltapre.github.io/SBJIT_ETC/">DEPARTMENTS</a></li>
                <li><a href="#">FACULTY</a></li>
                <li><a href="#">FACILITIES</a></li>
                <li><a href="#">GALLERY</a></li>
                <li><a href="#">CONTACT US</a></li>
                <li><a href="#">CAREER</a></li>
            </ul>
            <div class="search-bar">
                <input type="text" placeholder="Search">
                <button>🔍</button>
            </div>
        </div>
    </div>
    <!--   Header end  Here -->
    <div class="container">
        <h2>Admission Enquiry Form</h2>
        <form id="enquiryForm" action="" method="post">
            <div class="form-row">
                <div class="form-group">
                    <select id="enquiryFor" required>
                        <option value="">Enquiry For *</option>
                        <option value="UG">Undergraduate</option>
                        <option value="PG">Postgraduate</option>
                        <option value="PhD">PhD</option>
                    </select>
                </div>
                <div class="form-group">
                    <input type="text" id="studentName" placeholder="Name of Student *" required>
                </div>
                <div class="form-group">
                    <input type="text" id="address" placeholder="Address for Correspondence *" required>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group">
                    <input type="text" id="contactNumber" placeholder="Contact Number(s) *" required>
                </div>
                <div class="form-group">
                    <input type="text" id="parentMobile" placeholder="Parent Mobile No.">
                </div>
                <div class="form-group">
                    <input type="text" id="category" placeholder="Category">
                </div>
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label for="DOB"> Date of Birth</label>
                    <input type="date" id="dob" placeholder="Date of Birth (DD/MM/YYYY) *" required>
                </div>
            </div>

            <h3>HSC Marks Detail (For UG Course)</h3>
            <div class="form-row">
                <div class="form-group">
                    <input type="text" value="Marks Obtained" disabled>
                </div>
                <div class="form-group">
                    <input type="text" id="physics" placeholder="Physics">
                </div>
                <div class="form-group">
                    <input type="text" id="chemistry" placeholder="Chemistry">
                </div>
                <div class="form-group">
                    <input type="text" id="biology" placeholder="Biology">
                </div>
                <div class="form-group">
                    <input type="text" id="maths" placeholder="Maths">
                </div>
                <div class="form-group">
                    <input type="text" id="pcmPcb" placeholder="Total of PCM/PCB">
                </div>
                <div class="form-group">
                    <input type="text" id="aggregateHsc" placeholder="% Aggregate in HSC">
                </div>
            </div>

            <h3>For PG Course</h3>
            <div class="form-row">
                <div class="form-group">
                    <input type="text" id="ugMarks" placeholder="UG Marks">
                </div>
                <div class="form-group">
                    <input type="text" id="branchPreferred" placeholder="Branch Preferred">
                </div>
                <div class="form-group">
                    <input type="text" id="documents" placeholder="Documents / Certificates Possessed">
                </div>
            </div>

            <h3>CET Details</h3>
            <div class="form-row">
                <div class="form-group">
                    <input type="text" id="cetName" placeholder="CET Name">
                </div>
                <div class="form-group">
                    <input type="text" id="rollNo" placeholder="Roll No. / Exam Seat No.">
                </div>
                <div class="form-group">
                    <input type="text" id="marksObtained" placeholder="Marks Obtained">
                </div>
            </div>

            <div class="form-row submit-row">
                <button type="submit">Submit</button>
            </div>
        </form>
    </div>
    <div class="footer">
        <p>&copy; 2024 Harshal Tapre</p>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.17.0/xlsx.full.min.js"></script>
    <script src="script.js"></script>

</body>

</html>
# AdmissionInqueryPage
