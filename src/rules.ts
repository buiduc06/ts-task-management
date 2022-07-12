interface Rule {}

class RequiredRule implements Rule {
  Required?: boolean;
}
class MaxLengthRule implements Rule {
  MaxLength?: number;
}

class MinLength implements Rule {
  MinLength?: number;
}

type Rules = RequiredRule & MaxLengthRule & MinLength;

interface Messages {
  [prop: string]: string;
}

interface InputValidable {
  name: string;
  attribute: string;
  value: any;
  rules: Rules;
  messages: Messages;
}

const inputs: InputValidable[] = [
  {
    name: "title",
    attribute: "Tiêu đề",
    value: "313131",
    rules: {
      Required: true,
      MaxLength: 22,
      MinLength: 23,
    },
    messages: {
      required: ":attribute is required",
      max_length: ":attribute is max length",
    },
  },
  {
    name: "description",
    attribute: "Mô tả",
    value: "131",
    rules: {
      Required: true,
      MaxLength: 120,
    },
    messages: {
      required: ":attribute is required",
      max_length: ":attribute is max length",
    },
  },
];

class Validation {
  validate(_inputs: InputValidable[]) {
    for (let input of _inputs) {
      // title
      for (let [key, value] of Object.entries(input.rules)) {
        console.log(key, value);
        // check Required
        if (key === "Required" && value) {
          if (
            typeof input.value === "string" &&
            input.value.toString().trim().length <= 0
          ) {
          }
        }
      }
      // description
    }
  }
}

const rs = new Validation();
rs.validate(inputs);
