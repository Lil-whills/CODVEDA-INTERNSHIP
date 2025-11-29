

async function loadPortfolioData() {
  const apiURL = "https://script.google.com/macros/s/AKfycbycnfAAlMxXDnsv1utt5kmVEHtu4N8syCxD7hpeLV-b4nkJjNRqyZb547eOcg0BK9TegQ/exec";
  
  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    console.log(data); 
    data.Personal_Info.forEach(item => console.log(item.field));

    const nameInfo = data.Personal_Info.find(item => item.field === "name");
    const shortDesc = data.Personal_Info.find(item => item.field === "short_description");
    const whatsappInfo = data.Personal_Info.find(item => item.field === "whatsapp");
    const linkedinInfo = data.Personal_Info.find(item => item.field === "linkedin");
    const githubInfo = data.Personal_Info.find(item => item.field === "github");
    const emailInfo = data.Personal_Info.find(item => item.field === "email");
    const cvInfo = data.Personal_Info.find(item => item.field === "cv");
    const profileImgInfo = data.Personal_Info.find(item => item.field === "profile_image1");
    const profileImg2Info = data.Personal_Info.find(item => item.field === "profile_image2");


    const name = document.querySelector('.highlight-green');
    const desc = document.querySelector('.highlight-blue');
    const whatsappLink = document.querySelector('.social.whatsapp');
    const linkedinLink = document.querySelector('.social.linkedin');
    const githubLink = document.querySelector('.social.github');
    const emailLink = document.querySelector('.social.email');
    const cvLink = document.querySelector('.btn-cv');
    const profileImg = document.querySelector('.profile-pic');
    const aboutPic = document.querySelector('.about-pic');
    

    name.textContent = nameInfo.value;
    desc.textContent = shortDesc.value;
    whatsappLink.href = `https://wa.me/${whatsappInfo.value}`;
    linkedinLink.href = linkedinInfo.value;
    githubLink.href = githubInfo.value;
    emailLink.href = `mailto:${emailInfo.value}`;
    cvLink.href = cvInfo.value;
    profileImg.src = profileImgInfo.value;
    aboutPic.src = profileImg2Info.value;

    console.log("✅ Profile image loaded:", profileImgInfo.value);
    console.log("✅ Profile image loaded:", profileImg2Info.value);
    

  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

loadPortfolioData();

