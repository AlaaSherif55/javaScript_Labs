function startApp() {
    let userName = prompt(`Hi, Say Your Name`);
    if (userName != `` && userName != null) {
      alert(`Hi, ${userName} please answer the Following Questions`);
      let userAge = Number(prompt(`How old Are You ?!`));
      if (userAge > 0) {
        alert(`Ok! good enough to Complete`);
        let userAnswerOne = prompt(
          `Reply by yes or No | do you think programming is good for you ?`
        ).toLowerCase();
        if (userAnswerOne == `yes`) {
          alert(`${userName}, Sorry to say it | but you Have A mental issues 🙂`);
        } else if (userAnswerOne == `no`) {
          alert(
            `Mee too , thank you for telling us , I will give you a somthing `
          );
          let userAnswerTwo = prompt(
            `reply by ( advise || info || thanks ) `
          ).toLowerCase();
          if (userAnswerTwo == `advise`) {
            alert(
              `${userName}, the secret of getting a head is getting started , so start now 👌`
            );
          } else if (userAnswerTwo == `info`) {
            alert(
              `The human heart beats about 100,000 times a day! That means your ticker will beat around 36,500,000 times in a year. Count them if you don't believe us! Yes, we'll wait. 🤷‍♂️`
            );
          } else if (userAnswerTwo == `thanks`) {
            alert(`Thank you ${userName}`);
          } else {
            alert(`😒😒😒`);
          }
        } else {
          alert(`I Said Reply by YES OR NO 😒`);
        }
      } else {
        alert(`Please Start Again and Say Your age`);
      }
    } else {
      alert(`Please Start Again and Say Your Name`);
    }
  }