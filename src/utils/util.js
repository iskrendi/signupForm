// help functions

const ticketingSystems = [
  { label: "Zendesk", value: "zendesk" },
  { label: "Intercom", value: "intercom" },
  { label: "Gorgias", value: "gorgias" },
];

export const getFormInputFieldsData = (content, setContent) => [
  { key: "name",
    type: "text",
    placeholder:"What is the name of your business?",
    options: {},
    error: "Business Name Required",
    onSet: (value => setContent({...content, name: value}))
  },
  { key: "website",
    type: "text",
    placeholder:"Business Website",
    options: {},
    error: "Business Website Required",
    onSet: (value => setContent({...content, website: value}))
  },
  { key: "ticketingSystem",
    type: "select",
    placeholder:"Select your ticketing system",
    options: ticketingSystems,
    error: "Ticketing System Required",
    onSet: (value => setContent({...content, ticketingSystem: value}))
  },
  { key: "email",
    type: "email",
    placeholder:"Your email",
    options: {},
    error: "Email Required",
    onSet: (value => setContent({...content, email: value}))
  },
  { key: "password",
    type: "password",
    placeholder:"Password",
    options: {},
    error: "Password Required",
    onSet: (value => setContent({...content, password: value}))
  },
  { key: "terms",
    type: "checkbox",
    placeholder:"Checkbox",
    options: {},
    error: "",
    onSet: (value => setContent({...content, terms: value}))
  },
];
