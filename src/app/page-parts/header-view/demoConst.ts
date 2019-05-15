export const MenuStructures = {
  ADN: [
    {
      "title": "ADN Fund",
      "state": "ADN",
      "children": [
        {
          "title": "ADN Fund",
          "state": "ADN"
        }
      ]
    }
  ],
  CFC: [
    {
      "title": "Retail bank",
      "url": "/feedbacks/system-messages",
      "state": "app.acc",
      "tag": "ACC",
      "permissions": ['GPP_CFCCLIENT'],
      "children": [
        {
          "title": "Customer engagements",
          "state": "app.acc.customerEngagements"
        },
        {
          "title": "CASA",
          "state": "app.acc.casa",
          "permissions": ['GPP_CFCCASA']
        },
        {
          "title": "Loan",
          "state": "app.acc.loan",
          "permissions": ['GPP_CFCLOAN']
        }
      ]
    },
    {
      "title": "Internal accounts",
      "url": "/feedbacks/system-messages",
      "state": "app.aci",
      "tag": "ACI",
      "permissions": ['GPP_CFCCLIENT', 'GPP_CFCINTERNAL'],
      "children": [
        {
          "title": "Internal accounts",
          "state": "app.aci.internalAccounts"
        },
        {
          "title": "Rejected transactions",
          "state": "app.aci.rejectedTransactions"
        }
      ]
    }
  ],
  CBC: [
    {
      title: "Product management",
      permission: "GPP_IPRACCESS",
      children: [
        {
          title: "Product",
          "url": "/feedbacks/system-messages",
          state: "app.ihubproduct"
        }
      ]
    },
    {
      title: "Business support",
      permission: "GPP_CMCACCESS",
      children: [
        {
          title: "Document handling",
          "url": "/feedbacks/system-messages"
        },
        {
          title: "Mass changes",
          "url": "/feedbacks/system-messages",
          state: "app.massChanges",
          separator: true,
          children: [
            {
              title: "Mass product changes",
              state: "app.massChanges.massProductChanges"
            }
          ]
        },
        {
          title: "Audit",
          "url": "/feedbacks/system-messages"
        }
      ]
    },
    {
      title: "Reference",
      permission: 'GPP_AANACCESS',
      children: [
        {
          title: "Management",
          "url": "/feedbacks/system-messages"
        },
        {
          title: "Account numbers",
          "url": "/feedbacks/system-messages",
          state: "app.accountNumbers",
          children: [
            {
              title: "Parameter",
              state: "app.accountNumbers.parameter.list"
            },
            {
              title: "Account",
              state: "app.accountNumbers.account.list"
            }
          ]
        }
      ]
    },
    {
      title: "Administration",
      permission: "GPP_IFWSYADM",
      children: [
        {
          title: "General configuration",
          "url": "/feedbacks/system-messages",
          state: "app.generalConfiguration",
          children: [
            {
              title: "Operational calendar",
              state: "app.generalConfiguration.nonOperationalDays.list"
            }
          ]
        }
      ]
    }
  ]
};

export const Banks = {
  1: [
    {code: '1', name: 'Sparebank 1, Buskerud'}
  ],
  5: [
    {code: '1', name: 'Sparebank 1, Buskerud'},
    {code: '2', name: 'Sparebank 2, Buskerud'},
    {code: '3', name: 'Sparebank 3, Buskerud'},
    {code: '4', name: 'Sparebank 4, Buskerud'},
    {code: '5', name: 'Sparebank 5, Buskerud'}
  ],
  15: [
    {code: '1', name: 'Sparebank 1, Buskerud'},
    {code: '2', name: 'Sparebank 2, Buskerud'},
    {code: '3', name: 'Sparebank 3, Buskerud'},
    {code: '4', name: 'Sparebank 4, Buskerud'},
    {code: '5', name: 'Sparebank 5, Buskerud'},
    {code: '6', name: 'Sparebank 6, Buskerud'},
    {code: '7', name: 'Sparebank 7, Buskerud'},
    {code: '8', name: 'Sparebank 8, Buskerud'},
    {code: '9', name: 'Sparebank 9, Buskerud'},
    {code: '10', name: 'Sparebank 10, Buskerud'},
    {code: '11', name: 'Sparebank 11, Buskerud'},
    {code: '12', name: 'Sparebank 12, Buskerud'},
    {code: '13', name: 'Sparebank 13, Buskerud'},
    {code: '14', name: 'Sparebank 14, Buskerud'},
    {code: '15', name: 'Sparebank 15, Buskerud'}
  ]
};

export const Languages = {
  1: ['en'],
  2: ['en', 'no']
};

export const Applications = [
  {
    title: "Totalarkiv",
    permission: "GPP_IPRACCESS",
    url: "/page-parts/header-view",
  },
  {
    title: "Current URI",
    permission: "GPP_IPRACCESS",
    url: "/page-parts/header-view",
  },
  {
    title: "menu.productManagement",
    permission: "GPP_IPRACCESS",
    url: "/feedbacks/system-messages",
    children: [
      {
        title: "menu.productManagement.product",
        url: "/feedbacks/system-messages",
        children: [
          {
            title: "menu.productManagement.product.productList",
            url: "/feedbacks/system-messages",
          },
          {
            title: "menu.productManagement.product.conditions",
            id: "conditions",
            url: "/feedbacks/system-messages",
            children: [
              {
                title: "menu.productManagement.product.conditions.casa",
                id: "CASA",
                url: "/feedbacks/system-messages",
                children: []
              },
              {
                title: "menu.productManagement.product.conditions.internal",
                id: "INTERNAL",
                url: "/feedbacks/system-messages",
                children: []
              }
            ]
          },
          {
            title: "menu.productManagement.product.configurations",
            url: "/feedbacks/system-messages",
            children: [
              {
                title: "menu.productManagement.product.configurations.chargeType",
                url: "/feedbacks/system-messages",
              }
            ]
          }

        ]
      }
    ]
  },
  {
    title: "menu.businessSupport",
    url: "/feedbacks/system-messages",
    children: [
      {
        title: "menu.businessSupport.documentHandling",
        permission: "GPP_DMACCESS",
        url: "/feedbacks/system-messages",
      },
      {
        title: "menu.businessSupport.massChanges",
        permission: "GPP_CMCACCESS",
        url: "/feedbacks/system-messages",
        children: [
          {
            title: "menu.businessSupport.massChanges.massProductChanges",
            url: "/feedbacks/system-messages",
          }
        ]
      },
      {
        title: "menu.businessSupport.audit",
        permission: "GPP_CATACCESS",
        url: "/feedbacks/system-messages",
        children: [
          {
            title: "menu.businessSupport.audit",
            url: "/feedbacks/system-messages",
          }
        ]
      }
    ]
  },
  {
    title: "menu.reference",
    url: "/feedbacks/system-messages",
    children: [
      {
        title: "menu.reference.management",
        permission: 'GPP_DMSACCESS',
        url: "/feedbacks/system-messages",
        children: [
          {
            title: "menu.reference.dms.reminderRules",
            url: "/feedbacks/system-messages",
          },
          {
            title: "menu.reference.dms.debtCollectionRules",
            url: "/feedbacks/system-messages"
          },
          {
            title: "menu.reference.dms.systemSetup",
            url: "/feedbacks/system-messages"
          }
        ]
      },
      {
        title: "menu.reference.accountNumbers",
        permission: 'GPP_AANACCESS',
        url: "/feedbacks/system-messages",
        children: [
          {
            title: "menu.reference.accountNumbers.parameter",
            url: "/feedbacks/system-messages",
          },
          {
            title: "menu.reference.accountNumbers.account",
            url: "/feedbacks/system-messages",
          }
        ]
      }
    ]
  },
  {
    title: "menu.administration",
    permission: "GPP_IFWSYADM",
    url: "/feedbacks/system-messages",
    children: [
      {
        title: "menu.administration.generalConfiguration",
        url: "/feedbacks/system-messages",
        children: [
          {
            title: "menu.administration.operationalCalendar",
            url: "/feedbacks/system-messages"
          }
        ]
      }
    ]
  }
];
