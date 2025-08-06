class Message {
  send() {
    console.log("Mengirim pesan umum.");
  }
}

class Email extends Message {
  send() {
    console.log("Mengirim email ke pengguna.");
  }
}

class SMS extends Message {
  send() {
    console.log("Mengirim SMS ke nomor penerima.");
  }
}

const pesanUmum = new Message();
const pesanEmail = new Email();
const pesanSMS = new SMS();

pesanUmum.send();
pesanEmail.send();
pesanSMS.send();