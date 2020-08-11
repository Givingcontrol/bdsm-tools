export default [
  {
    title: 'Simple Negotiation',
    active: true,
    schema: {
      type: 'object',
      required: [
        'name',
        'verifyAge',
        'experience',
      ],
      intro: {
        type: 'object',
        name: {
          type: 'string',
        },
        verifyAge: {
          type: 'boolean',
          const: true,
        },
        experience: {
          type: 'enum',
          options: [
            'None',
            'A Little',
            'A Lot',
            'Very Experienced',
          ],
        }
      },
      pussy: {
        type: 'object',
        verifyPussy: {
          type: 'boolean',
        },
        acts: {
          type: 'lookuplist',
        },
      },
      bondage: {
        type: 'object',
        verifyBondage: {
          type: 'boolean',
        },
        acts: {
          type: 'lookuplist',
        },
      },
      roleplay: {
        type: 'object',
        verifyRoleplay: {
          type: 'boolean',
        },
        acts: {
          type: 'lookuplist',
        },
      },
      dick: {
        type: 'object',
        verifyDick: {
          type: 'boolean',
        },
        acts: {
          type: 'lookuplist',
        },
      },
      ass: {
        type: 'object',
        verifyAss: {
          type: 'boolean',
        },
        acts: {
          type: 'lookuplist',
        },
      },
      equipment: {
        type: 'object',
      },
    },
    uischema: {
      type: 'Categorization',
      elements: [
        {
          type: 'Category',
          label: 'Intro',
          elements: [
            {
              type: "VerticalLayout",
              width: '400px',
              elements: [
                {
                  type: "Control",
                  scope: "#/intro/name",
                  label: "Your Name:",
                }, {
                  type: 'Control',
                  scope: '#/intro/verifyAge',
                  label: 'Verify I am over the age of 18',
                }, {
                  type: 'Control',
                  scope: '#/intro/experience',
                  label: 'BDSM Experience Level',
                },
              ],
            },
          ],
        }, {
          type: 'Category',
          label: 'Bondage',
          elements: [
            {
              type: "VerticalLayout",
              elements: [
                {
                  type: 'Control',
                  scope: '#/bondage/verifyBondage',
                  label: 'Verify I want to be in Bondage',
                }, {
                  type: 'Control',
                  scope: '#/bondage/acts',
                  label: 'Select an answer for each act',
                  questions: [
                    'Rope Bondage',
                  ],
                  answers: [
                    'Accept',
                    'Soft Limit',
                    'Hard Limit',
                  ],
                  rule: {
                    effect: 'SHOW',
                    condition: {
                      scope: '#/bondage/verifyBondage',
                      schema: { const: true }
                    },
                  },
                },
              ],
            },
          ],
        }, {
          type: 'Category',
          label: 'Role Play',
          elements: [
            {
              type: "VerticalLayout",
              elements: [
                {
                  type: 'Control',
                  scope: '#/roleplay/verifyRoleplay',
                  label: 'Verify I want to partake in Role Play',
                }, {
                  type: 'Control',
                  scope: '#/roleplay/acts',
                  label: 'Select an answer for each act',
                  questions: [
                    'Master/Slave',
                    'Daddy/Daughter',
                    'Owner/Pet',
                    'Teacher/Student',
                    'Nurse/Patient',
                    'Police Officer/Suspect',
                  ],
                  answers: [
                    'Very Interested',
                    'Interested',
                    'Not Interested',
                    'Definitely Not Interested',
                  ],
                  rule: {
                    effect: 'SHOW',
                    condition: {
                      scope: '#/roleplay/verifyRoleplay',
                      schema: { const: true }
                    },
                  },
                },
              ],
            },
          ],
        }, {
          type: 'Category',
          label: 'Pussy',
          elements: [
            {
              type: "VerticalLayout",
              elements: [
                {
                  type: 'Control',
                  scope: '#/pussy/verifyPussy',
                  label: 'Verify I have a pussy',
                }, {
                  type: 'Control',
                  scope: '#/pussy/acts',
                  label: 'Select an answer for each act',
                  questions: [
                    'Penetration',
                    'Vibrator',
                    'Clamps',
                  ],
                  answers: [
                    'Accept',
                    'Soft Limit',
                    'Hard Limit',
                  ],
                  rule: {
                    effect: 'SHOW',
                    condition: {
                      scope: '#/pussy/verifyPussy',
                      schema: { const: true }
                    },
                  },
                },
              ],
            },
          ],
        }, {
          type: 'Category',
          label: 'Dick',
          elements: [
            {
              type: "VerticalLayout",
              elements: [
                {
                  type: 'Control',
                  scope: '#/dick/verifyDick',
                  label: 'Verify I have a Dick',
                }, {
                  type: 'Control',
                  scope: '#/dick/acts',
                  label: '',
                  questions: [
                    'Penetration',
                  ],
                  answers: [
                    '',
                    'Soft Limit',
                    'Hard Limit',
                  ],
                  rule: {
                    effect: 'SHOW',
                    condition: {
                      scope: '#/dick/verifyDick',
                      schema: { const: true }
                    },
                  },
                },
              ],
            },
          ],
        }, {
          type: 'Category',
          label: 'Ass',
          elements: [
            {
              type: "VerticalLayout",
              elements: [
                {
                  type: 'Control',
                  scope: '#/ass/verifyAss',
                  label: 'Verify I have an Ass',
                }, {
                  type: 'Control',
                  scope: '#/ass/acts',
                  label: '',
                  questions: [
                    'Penetration',
                  ],
                  answers: [
                    '',
                    'Soft Limit',
                    'Hard Limit',
                  ],
                  rule: {
                    effect: 'SHOW',
                    condition: {
                      scope: '#/ass/verifyAss',
                      schema: { const: true }
                    },
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  },
];
