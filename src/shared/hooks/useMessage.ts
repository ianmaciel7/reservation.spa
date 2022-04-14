import { FormType } from "../components/wrappedForm";

export default () => {
  const message = {
    titleForm(name: string, type: FormType) {
      const messageType = (t: FormType) => {
        switch (t) {
          case "add":
            return "Adicionar";

          case "edit":
            return "Editar";

          default:
            return "error";
        }
      };

      const t = messageType(type);
      return `${t} ${name.toLowerCase()}`;
    },
    successForm(name: string, type: FormType) {
      const messageType = (t: FormType) => {
        switch (t) {
          case "add":
            return "adicionando";

          case "edit":
            return "editado";

          default:
            return "error";
        }
      };

      const t = messageType(type);
      return `${name} foi ${t} com sucesso clique no botão abaixo para voltar`;
    },
  };
  return message;
};
