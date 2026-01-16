const API = "http://localhost:5000";

// ---------- INTERNSHIPS ----------

async function addInternship() {
  const companyInput = document.getElementById("company");
  const roleInput = document.getElementById("role");

  const company = companyInput.value.trim();
  const role = roleInput.value.trim();

  if (!company || !role) {
    alert("Please enter company and role");
    return;
  }

  try {
    await fetch(`${API}/internships`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ company, role })
    });

    companyInput.value = "";
    roleInput.value = "";

    loadInternships();
  } catch (err) {
    console.error("Error adding internship:", err);
  }
}

async function loadInternships() {
  try {
    const res = await fetch(`${API}/internships`);
    const data = await res.json();

    console.log("Internships fetched:", data); // DEBUG

    const list = document.getElementById("internshipList");
    list.innerHTML = "";

    data.forEach(i => {
      const li = document.createElement("li");
      li.innerHTML = `
        ${i.company} - ${i.role}
        <button type="button" onclick="deleteInternship('${i._id}')">Delete</button>
      `;
      list.appendChild(li);
    });
  } catch (err) {
    console.error("Error loading internships:", err);
  }
}

async function deleteInternship(id) {
  await fetch(`${API}/internships/${id}`, { method: "DELETE" });
  loadInternships();
}

// Initial load
loadInternships();
