var el = document.createElement('script');
el.src = "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.15.0/lodash.min.js";
el.type = "text/javascript";
document.head.appendChild(el);

circles = {
    tree: [
      {
        name: 'rootNode',
        childLeft: {
          name: 'E',
          level: 1,
          children: [
            {
              name: 'I',
              level: 2,
              children: [
                {
                  name: 'S',
                  level: 3,
                  children: [
                    {
                      name: 'H',
                      level: 4,
                      children: [
                        {
                          name: '_5',
                          level: 5
                        },
                        {
                          name: '_4',
                          level: 5
                        }
                      ]
                    },
                    {
                      name: 'V',
                      level: 4,
                      children: [
                        {
                          name: 'i',
                          level: 5
                        },
                        {
                          name: '_3',
                          level: 5
                        }
                      ]
                    }
                  ]
                },
                {
                  name: 'U',
                  level: 3,
                  children: [
                    {
                      name: 'F',
                      level: 4,
                      children: [
                        {
                          name: 'i1',
                          level: 5
                        },
                        {
                          name: 'i2',
                          level: 5
                        }
                      ]
                    },
                    {
                      name: 'i3',
                      level: 4,
                      children: [
                        {
                          name: 'i4',
                          level: 5
                        },
                        {
                          name: '_2',
                          level: 5
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              name: 'A',
              level: 2,
              children: [
                {
                  name: 'R',
                  level: 3,
                  children: [
                    {
                      name: 'L',
                      level: 4,
                      children: [
                        {
                          name: 'i5',
                          level: 5
                        },
                        {
                          name: 'i6',
                          level: 5
                        }
                      ]
                    },
                    {
                      name: 'i7',
                      level: 4,
                      children: [
                        {
                          name: '_+',
                          level: 5
                        },
                        {
                          name: 'i8',
                          level: 5
                        }
                      ]
                    }
                  ]
                },
                {
                  name: 'W',
                  level: 3,
                  children: [
                    {
                      name: 'P',
                      level: 4,
                      children: [
                        {
                          name: 'i9',
                          level: 5
                        },
                        {
                          name: 'i0',
                          level: 5
                        }
                      ]
                    },
                    {
                      name: 'J',
                      level: 4,
                      children: [
                        {
                          name: 'l1',
                          level: 5
                        },
                        {
                          name: '_1',
                          level: 5
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        childRight: {
          name: 'T',
          level: 1,
          children: [
            {
              name: 'N',
              level: 2,
              children: [
                {
                  name: 'D',
                  level: 3,
                  children: [
                    {
                      name: 'B',
                      level: 4,
                      children: [
                        {
                          name: '_6',
                          level: 5
                        },
                        {
                          name: '_=',
                          level: 5
                        }
                      ]
                    },
                    {
                      name: 'X',
                      level: 4,
                      children: [
                        {
                          name: '_/',
                          level: 5
                        },
                        {
                          name: 'l2',
                          level: 5
                        }
                      ]
                    }
                  ]
                },
                {
                  name: 'K',
                  level: 3,
                  children: [
                    {
                      name: 'C',
                      level: 4,
                      children: [
                        {
                          name: 'l3',
                          level: 5
                        },
                        {
                          name: 'l4',
                          level: 5
                        }
                      ]
                    },
                    {
                      name: 'Y',
                      level: 4,
                      children: [
                        {
                          name: 'l5',
                          level: 5
                        },
                        {
                          name: 'l6',
                          level: 5
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              name: 'M',
              level: 2,
              children: [
                {
                  name: 'G',
                  level: 3,
                  children: [
                    {
                      name: 'Z',
                      level: 4,
                      children: [
                        {
                          name: '_7',
                          level: 5
                        },
                        {
                          name: 'l7',
                          level: 5
                        }
                      ]
                    },
                    {
                      name: 'Q',
                      level: 4,
                      children: [
                        {
                          name: 'l8',
                          level: 5
                        },
                        {
                          name: 'l9',
                          level: 5
                        }
                      ]
                    }
                  ]
                },
                {
                  name: 'O',
                  level: 3,
                  children: [
                    {
                      name: 'il',
                      level: 4,
                      children: [
                        {
                          name: '_8',
                          level: 5
                        },
                        {
                          name: 'li',
                          level: 5
                        }
                      ]
                    },
                    {
                      name: 'it',
                      level: 4,
                      children: [
                        {
                          name: '_9',
                          level: 5
                        },
                        {
                          name: '_0',
                          level: 5
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        radius: 17,
        parent: 'rootNode',
        level: 0,
        cx: 600,
        cy: 31.66666666666667,
        stroke: 'red'
      },
      {
        name: 'E',
        childLeft: {
          name: 'I',
          level: 2,
          children: [
            {
              name: 'S',
              level: 3,
              children: [
                {
                  name: 'H',
                  level: 4,
                  children: [
                    {
                      name: '_5',
                      level: 5
                    },
                    {
                      name: '_4',
                      level: 5
                    }
                  ]
                },
                {
                  name: 'V',
                  level: 4,
                  children: [
                    {
                      name: 'i',
                      level: 5
                    },
                    {
                      name: '_3',
                      level: 5
                    }
                  ]
                }
              ]
            },
            {
              name: 'U',
              level: 3,
              children: [
                {
                  name: 'F',
                  level: 4,
                  children: [
                    {
                      name: 'i1',
                      level: 5
                    },
                    {
                      name: 'i2',
                      level: 5
                    }
                  ]
                },
                {
                  name: 'i3',
                  level: 4,
                  children: [
                    {
                      name: 'i4',
                      level: 5
                    },
                    {
                      name: '_2',
                      level: 5
                    }
                  ]
                }
              ]
            }
          ]
        },
        childRight: {
          name: 'A',
          level: 2,
          children: [
            {
              name: 'R',
              level: 3,
              children: [
                {
                  name: 'L',
                  level: 4,
                  children: [
                    {
                      name: 'i5',
                      level: 5
                    },
                    {
                      name: 'i6',
                      level: 5
                    }
                  ]
                },
                {
                  name: 'i7',
                  level: 4,
                  children: [
                    {
                      name: '_+',
                      level: 5
                    },
                    {
                      name: 'i8',
                      level: 5
                    }
                  ]
                }
              ]
            },
            {
              name: 'W',
              level: 3,
              children: [
                {
                  name: 'P',
                  level: 4,
                  children: [
                    {
                      name: 'i9',
                      level: 5
                    },
                    {
                      name: 'i0',
                      level: 5
                    }
                  ]
                },
                {
                  name: 'J',
                  level: 4,
                  children: [
                    {
                      name: 'l1',
                      level: 5
                    },
                    {
                      name: '_1',
                      level: 5
                    }
                  ]
                }
              ]
            }
          ]
        },
        radius: 17,
        parent: 'rootNode',
        level: 1,
        cx: 300,
        cy: 98.33333333333334,
        stroke: 'steelblue'
      },
      {
        name: 'I',
        childLeft: {
          name: 'S',
          level: 3,
          children: [
            {
              name: 'H',
              level: 4,
              children: [
                {
                  name: '_5',
                  level: 5
                },
                {
                  name: '_4',
                  level: 5
                }
              ]
            },
            {
              name: 'V',
              level: 4,
              children: [
                {
                  name: 'i',
                  level: 5
                },
                {
                  name: '_3',
                  level: 5
                }
              ]
            }
          ]
        },
        childRight: {
          name: 'U',
          level: 3,
          children: [
            {
              name: 'F',
              level: 4,
              children: [
                {
                  name: 'i1',
                  level: 5
                },
                {
                  name: 'i2',
                  level: 5
                }
              ]
            },
            {
              name: 'i3',
              level: 4,
              children: [
                {
                  name: 'i4',
                  level: 5
                },
                {
                  name: '_2',
                  level: 5
                }
              ]
            }
          ]
        },
        radius: 17,
        parent: 'E',
        level: 2,
        cx: 150,
        cy: 165,
        stroke: 'steelblue'
      },
      {
        name: 'S',
        childLeft: {
          name: 'H',
          level: 4,
          children: [
            {
              name: '_5',
              level: 5
            },
            {
              name: '_4',
              level: 5
            }
          ]
        },
        childRight: {
          name: 'V',
          level: 4,
          children: [
            {
              name: 'i',
              level: 5
            },
            {
              name: '_3',
              level: 5
            }
          ]
        },
        radius: 17,
        parent: 'I',
        level: 3,
        cx: 75,
        cy: 231.66666666666669,
        stroke: 'steelblue'
      },
      {
        name: 'H',
        childLeft: {
          name: '_5',
          level: 5
        },
        childRight: {
          name: '_4',
          level: 5
        },
        radius: 17,
        parent: 'S',
        level: 4,
        cx: 37.5,
        cy: 298.33333333333337,
        stroke: 'steelblue'
      },
      {
        name: '_5',
        childLeft: '',
        childRight: '',
        radius: 17,
        parent: 'H',
        level: 5,
        cx: 18.75,
        cy: 365,
        stroke: 'steelblue'
      },
      {
        name: '_4',
        childLeft: '',
        childRight: '',
        radius: 17,
        parent: 'H',
        level: 5,
        cx: 56.25,
        cy: 365,
        stroke: 'steelblue'
      },
      {
        name: 'V',
        childLeft: {
          name: 'i',
          level: 5
        },
        childRight: {
          name: '_3',
          level: 5
        },
        radius: 17,
        parent: 'S',
        level: 4,
        cx: 112.5,
        cy: 298.33333333333337,
        stroke: 'steelblue'
      },
      {
        name: 'i',
        childLeft: '',
        childRight: '',
        radius: 17,
        parent: 'V',
        level: 5,
        cx: 93.75,
        cy: 365,
        stroke: 'steelblue'
      },
      {
        name: '_3',
        childLeft: '',
        childRight: '',
        radius: 17,
        parent: 'V',
        level: 5,
        cx: 131.25,
        cy: 365,
        stroke: 'steelblue'
      },
      {
        name: 'U',
        childLeft: {
          name: 'F',
          level: 4,
          children: [
            {
              name: 'i1',
              level: 5
            },
            {
              name: 'i2',
              level: 5
            }
          ]
        },
        childRight: {
          name: 'i3',
          level: 4,
          children: [
            {
              name: 'i4',
              level: 5
            },
            {
              name: '_2',
              level: 5
            }
          ]
        },
        radius: 17,
        parent: 'I',
        level: 3,
        cx: 225,
        cy: 231.66666666666669,
        stroke: 'steelblue'
      },
      {
        name: 'F',
        childLeft: {
          name: 'i1',
          level: 5
        },
        childRight: {
          name: 'i2',
          level: 5
        },
        radius: 17,
        parent: 'U',
        level: 4,
        cx: 187.5,
        cy: 298.33333333333337,
        stroke: 'steelblue'
      },
      {
        name: 'i1',
        childLeft: '',
        childRight: '',
        radius: 17,
        parent: 'F',
        level: 5,
        cx: 168.75,
        cy: 365,
        stroke: 'steelblue'
      },
      {
        name: 'i2',
        childLeft: '',
        childRight: '',
        radius: 17,
        parent: 'F',
        level: 5,
        cx: 206.25,
        cy: 365,
        stroke: 'steelblue'
      },
      {
        name: 'i3',
        childLeft: {
          name: 'i4',
          level: 5
        },
        childRight: {
          name: '_2',
          level: 5
        },
        radius: 17,
        parent: 'U',
        level: 4,
        cx: 262.5,
        cy: 298.33333333333337,
        stroke: 'steelblue'
      },
      {
        name: 'i4',
        childLeft: '',
        childRight: '',
        radius: 17,
        parent: 'i3',
        level: 5,
        cx: 243.75,
        cy: 365,
        stroke: 'steelblue'
      },
      {
        name: '_2',
        childLeft: '',
        childRight: '',
        radius: 17,
        parent: 'i3',
        level: 5,
        cx: 281.25,
        cy: 365,
        stroke: 'steelblue'
      },
      {
        name: 'A',
        childLeft: {
          name: 'R',
          level: 3,
          children: [
            {
              name: 'L',
              level: 4,
              children: [
                {
                  name: 'i5',
                  level: 5
                },
                {
                  name: 'i6',
                  level: 5
                }
              ]
            },
            {
              name: 'i7',
              level: 4,
              children: [
                {
                  name: '_+',
                  level: 5
                },
                {
                  name: 'i8',
                  level: 5
                }
              ]
            }
          ]
        },
        childRight: {
          name: 'W',
          level: 3,
          children: [
            {
              name: 'P',
              level: 4,
              children: [
                {
                  name: 'i9',
                  level: 5
                },
                {
                  name: 'i0',
                  level: 5
                }
              ]
            },
            {
              name: 'J',
              level: 4,
              children: [
                {
                  name: 'l1',
                  level: 5
                },
                {
                  name: '_1',
                  level: 5
                }
              ]
            }
          ]
        },
        radius: 17,
        parent: 'E',
        level: 2,
        cx: 450,
        cy: 165,
        stroke: 'steelblue'
      },
      {
        name: 'R',
        childLeft: {
          name: 'L',
          level: 4,
          children: [
            {
              name: 'i5',
              level: 5
            },
            {
              name: 'i6',
              level: 5
            }
          ]
        },
        childRight: {
          name: 'i7',
          level: 4,
          children: [
            {
              name: '_+',
              level: 5
            },
            {
              name: 'i8',
              level: 5
            }
          ]
        },
        radius: 17,
        parent: 'A',
        level: 3,
        cx: 375,
        cy: 231.66666666666669,
        stroke: 'steelblue'
      },
      {
        name: 'L',
        childLeft: {
          name: 'i5',
          level: 5
        },
        childRight: {
          name: 'i6',
          level: 5
        },
        radius: 17,
        parent: 'R',
        level: 4,
        cx: 337.5,
        cy: 298.33333333333337,
        stroke: 'steelblue'
      },
      {
        name: 'i5',
        childLeft: '',
        childRight: '',
        radius: 17,
        parent: 'L',
        level: 5,
        cx: 318.75,
        cy: 365,
        stroke: 'steelblue'
      },
      {
        name: 'i6',
        childLeft: '',
        childRight: '',
        radius: 17,
        parent: 'L',
        level: 5,
        cx: 356.25,
        cy: 365,
        stroke: 'steelblue'
      },
      {
        name: 'i7',
        childLeft: {
          name: '_+',
          level: 5
        },
        childRight: {
          name: 'i8',
          level: 5
        },
        radius: 17,
        parent: 'R',
        level: 4,
        cx: 412.5,
        cy: 298.33333333333337,
        stroke: 'steelblue'
      },
      {
        name: '_+',
        childLeft: '',
        childRight: '',
        radius: 17,
        parent: 'i7',
        level: 5,
        cx: 393.75,
        cy: 365,
        stroke: 'steelblue'
      },
      {
        name: 'i8',
        childLeft: '',
        childRight: '',
        radius: 17,
        parent: 'i7',
        level: 5,
        cx: 431.25,
        cy: 365,
        stroke: 'steelblue'
      },
      {
        name: 'W',
        childLeft: {
          name: 'P',
          level: 4,
          children: [
            {
              name: 'i9',
              level: 5
            },
            {
              name: 'i0',
              level: 5
            }
          ]
        },
        childRight: {
          name: 'J',
          level: 4,
          children: [
            {
              name: 'l1',
              level: 5
            },
            {
              name: '_1',
              level: 5
            }
          ]
        },
        radius: 17,
        parent: 'A',
        level: 3,
        cx: 525,
        cy: 231.66666666666669,
        stroke: 'steelblue'
      },
      {
        name: 'P',
        childLeft: {
          name: 'i9',
          level: 5
        },
        childRight: {
          name: 'i0',
          level: 5
        },
        radius: 17,
        parent: 'W',
        level: 4,
        cx: 487.5,
        cy: 298.33333333333337,
        stroke: 'steelblue'
      },
      {
        name: 'i9',
        childLeft: '',
        childRight: '',
        radius: 17,
        parent: 'P',
        level: 5,
        cx: 468.75,
        cy: 365,
        stroke: 'steelblue'
      },
      {
        name: 'i0',
        childLeft: '',
        childRight: '',
        radius: 17,
        parent: 'P',
        level: 5,
        cx: 506.25,
        cy: 365,
        stroke: 'steelblue'
      },
      {
        name: 'J',
        childLeft: {
          name: 'l1',
          level: 5
        },
        childRight: {
          name: '_1',
          level: 5
        },
        radius: 17,
        parent: 'W',
        level: 4,
        cx: 562.5,
        cy: 298.33333333333337,
        stroke: 'steelblue'
      },
      {
        name: 'l1',
        childLeft: '',
        childRight: '',
        radius: 17,
        parent: 'J',
        level: 5,
        cx: 543.75,
        cy: 365,
        stroke: 'steelblue'
      },
      {
        name: '_1',
        childLeft: '',
        childRight: '',
        radius: 17,
        parent: 'J',
        level: 5,
        cx: 581.25,
        cy: 365,
        stroke: 'steelblue'
      },
      {
        name: 'T',
        childLeft: {
          name: 'N',
          level: 2,
          children: [
            {
              name: 'D',
              level: 3,
              children: [
                {
                  name: 'B',
                  level: 4,
                  children: [
                    {
                      name: '_6',
                      level: 5
                    },
                    {
                      name: '_=',
                      level: 5
                    }
                  ]
                },
                {
                  name: 'X',
                  level: 4,
                  children: [
                    {
                      name: '_/',
                      level: 5
                    },
                    {
                      name: 'l2',
                      level: 5
                    }
                  ]
                }
              ]
            },
            {
              name: 'K',
              level: 3,
              children: [
                {
                  name: 'C',
                  level: 4,
                  children: [
                    {
                      name: 'l3',
                      level: 5
                    },
                    {
                      name: 'l4',
                      level: 5
                    }
                  ]
                },
                {
                  name: 'Y',
                  level: 4,
                  children: [
                    {
                      name: 'l5',
                      level: 5
                    },
                    {
                      name: 'l6',
                      level: 5
                    }
                  ]
                }
              ]
            }
          ]
        },
        childRight: {
          name: 'M',
          level: 2,
          children: [
            {
              name: 'G',
              level: 3,
              children: [
                {
                  name: 'Z',
                  level: 4,
                  children: [
                    {
                      name: '_7',
                      level: 5
                    },
                    {
                      name: 'l7',
                      level: 5
                    }
                  ]
                },
                {
                  name: 'Q',
                  level: 4,
                  children: [
                    {
                      name: 'l8',
                      level: 5
                    },
                    {
                      name: 'l9',
                      level: 5
                    }
                  ]
                }
              ]
            },
            {
              name: 'O',
              level: 3,
              children: [
                {
                  name: 'il',
                  level: 4,
                  children: [
                    {
                      name: '_8',
                      level: 5
                    },
                    {
                      name: 'li',
                      level: 5
                    }
                  ]
                },
                {
                  name: 'it',
                  level: 4,
                  children: [
                    {
                      name: '_9',
                      level: 5
                    },
                    {
                      name: '_0',
                      level: 5
                    }
                  ]
                }
              ]
            }
          ]
        },
        radius: 17,
        parent: 'rootNode',
        level: 1,
        cx: 900,
        cy: 98.33333333333334,
        stroke: 'steelblue'
      },
      {
        name: 'N',
        childLeft: {
          name: 'D',
          level: 3,
          children: [
            {
              name: 'B',
              level: 4,
              children: [
                {
                  name: '_6',
                  level: 5
                },
                {
                  name: '_=',
                  level: 5
                }
              ]
            },
            {
              name: 'X',
              level: 4,
              children: [
                {
                  name: '_/',
                  level: 5
                },
                {
                  name: 'l2',
                  level: 5
                }
              ]
            }
          ]
        },
        childRight: {
          name: 'K',
          level: 3,
          children: [
            {
              name: 'C',
              level: 4,
              children: [
                {
                  name: 'l3',
                  level: 5
                },
                {
                  name: 'l4',
                  level: 5
                }
              ]
            },
            {
              name: 'Y',
              level: 4,
              children: [
                {
                  name: 'l5',
                  level: 5
                },
                {
                  name: 'l6',
                  level: 5
                }
              ]
            }
          ]
        },
        radius: 17,
        parent: 'T',
        level: 2,
        cx: 750,
        cy: 165,
        stroke: 'steelblue'
      },
      {
        name: 'D',
        childLeft: {
          name: 'B',
          level: 4,
          children: [
            {
              name: '_6',
              level: 5
            },
            {
              name: '_=',
              level: 5
            }
          ]
        },
        childRight: {
          name: 'X',
          level: 4,
          children: [
            {
              name: '_/',
              level: 5
            },
            {
              name: 'l2',
              level: 5
            }
          ]
        },
        radius: 17,
        parent: 'N',
        level: 3,
        cx: 675,
        cy: 231.66666666666669,
        stroke: 'steelblue'
      },
      {
        name: 'B',
        childLeft: {
          name: '_6',
          level: 5
        },
        childRight: {
          name: '_=',
          level: 5
        },
        radius: 17,
        parent: 'D',
        level: 4,
        cx: 637.5,
        cy: 298.33333333333337,
        stroke: 'steelblue'
      },
      {
        name: '_6',
        childLeft: '',
        childRight: '',
        radius: 17,
        parent: 'B',
        level: 5,
        cx: 618.75,
        cy: 365,
        stroke: 'steelblue'
      },
      {
        name: '_=',
        childLeft: '',
        childRight: '',
        radius: 17,
        parent: 'B',
        level: 5,
        cx: 656.25,
        cy: 365,
        stroke: 'steelblue'
      },
      {
        name: 'X',
        childLeft: {
          name: '_/',
          level: 5
        },
        childRight: {
          name: 'l2',
          level: 5
        },
        radius: 17,
        parent: 'D',
        level: 4,
        cx: 712.5,
        cy: 298.33333333333337,
        stroke: 'steelblue'
      },
      {
        name: '_/',
        childLeft: '',
        childRight: '',
        radius: 17,
        parent: 'X',
        level: 5,
        cx: 693.75,
        cy: 365,
        stroke: 'steelblue'
      },
      {
        name: 'l2',
        childLeft: '',
        childRight: '',
        radius: 17,
        parent: 'X',
        level: 5,
        cx: 731.25,
        cy: 365,
        stroke: 'steelblue'
      },
      {
        name: 'K',
        childLeft: {
          name: 'C',
          level: 4,
          children: [
            {
              name: 'l3',
              level: 5
            },
            {
              name: 'l4',
              level: 5
            }
          ]
        },
        childRight: {
          name: 'Y',
          level: 4,
          children: [
            {
              name: 'l5',
              level: 5
            },
            {
              name: 'l6',
              level: 5
            }
          ]
        },
        radius: 17,
        parent: 'N',
        level: 3,
        cx: 825,
        cy: 231.66666666666669,
        stroke: 'steelblue'
      },
      {
        name: 'C',
        childLeft: {
          name: 'l3',
          level: 5
        },
        childRight: {
          name: 'l4',
          level: 5
        },
        radius: 17,
        parent: 'K',
        level: 4,
        cx: 787.5,
        cy: 298.33333333333337,
        stroke: 'steelblue'
      },
      {
        name: 'l3',
        childLeft: '',
        childRight: '',
        radius: 17,
        parent: 'C',
        level: 5,
        cx: 768.75,
        cy: 365,
        stroke: 'steelblue'
      },
      {
        name: 'l4',
        childLeft: '',
        childRight: '',
        radius: 17,
        parent: 'C',
        level: 5,
        cx: 806.25,
        cy: 365,
        stroke: 'steelblue'
      },
      {
        name: 'Y',
        childLeft: {
          name: 'l5',
          level: 5
        },
        childRight: {
          name: 'l6',
          level: 5
        },
        radius: 17,
        parent: 'K',
        level: 4,
        cx: 862.5,
        cy: 298.33333333333337,
        stroke: 'steelblue'
      },
      {
        name: 'l5',
        childLeft: '',
        childRight: '',
        radius: 17,
        parent: 'Y',
        level: 5,
        cx: 843.75,
        cy: 365,
        stroke: 'steelblue'
      },
      {
        name: 'l6',
        childLeft: '',
        childRight: '',
        radius: 17,
        parent: 'Y',
        level: 5,
        cx: 881.25,
        cy: 365,
        stroke: 'steelblue'
      },
      {
        name: 'M',
        childLeft: {
          name: 'G',
          level: 3,
          children: [
            {
              name: 'Z',
              level: 4,
              children: [
                {
                  name: '_7',
                  level: 5
                },
                {
                  name: 'l7',
                  level: 5
                }
              ]
            },
            {
              name: 'Q',
              level: 4,
              children: [
                {
                  name: 'l8',
                  level: 5
                },
                {
                  name: 'l9',
                  level: 5
                }
              ]
            }
          ]
        },
        childRight: {
          name: 'O',
          level: 3,
          children: [
            {
              name: 'il',
              level: 4,
              children: [
                {
                  name: '_8',
                  level: 5
                },
                {
                  name: 'li',
                  level: 5
                }
              ]
            },
            {
              name: 'it',
              level: 4,
              children: [
                {
                  name: '_9',
                  level: 5
                },
                {
                  name: '_0',
                  level: 5
                }
              ]
            }
          ]
        },
        radius: 17,
        parent: 'T',
        level: 2,
        cx: 1050,
        cy: 165,
        stroke: 'steelblue'
      },
      {
        name: 'G',
        childLeft: {
          name: 'Z',
          level: 4,
          children: [
            {
              name: '_7',
              level: 5
            },
            {
              name: 'l7',
              level: 5
            }
          ]
        },
        childRight: {
          name: 'Q',
          level: 4,
          children: [
            {
              name: 'l8',
              level: 5
            },
            {
              name: 'l9',
              level: 5
            }
          ]
        },
        radius: 17,
        parent: 'M',
        level: 3,
        cx: 975,
        cy: 231.66666666666669,
        stroke: 'steelblue'
      },
      {
        name: 'Z',
        childLeft: {
          name: '_7',
          level: 5
        },
        childRight: {
          name: 'l7',
          level: 5
        },
        radius: 17,
        parent: 'G',
        level: 4,
        cx: 937.5,
        cy: 298.33333333333337,
        stroke: 'steelblue'
      },
      {
        name: '_7',
        childLeft: '',
        childRight: '',
        radius: 17,
        parent: 'Z',
        level: 5,
        cx: 918.75,
        cy: 365,
        stroke: 'steelblue'
      },
      {
        name: 'l7',
        childLeft: '',
        childRight: '',
        radius: 17,
        parent: 'Z',
        level: 5,
        cx: 956.25,
        cy: 365,
        stroke: 'steelblue'
      },
      {
        name: 'Q',
        childLeft: {
          name: 'l8',
          level: 5
        },
        childRight: {
          name: 'l9',
          level: 5
        },
        radius: 17,
        parent: 'G',
        level: 4,
        cx: 1012.5,
        cy: 298.33333333333337,
        stroke: 'steelblue'
      },
      {
        name: 'l8',
        childLeft: '',
        childRight: '',
        radius: 17,
        parent: 'Q',
        level: 5,
        cx: 993.75,
        cy: 365,
        stroke: 'steelblue'
      },
      {
        name: 'l9',
        childLeft: '',
        childRight: '',
        radius: 17,
        parent: 'Q',
        level: 5,
        cx: 1031.25,
        cy: 365,
        stroke: 'steelblue'
      },
      {
        name: 'O',
        childLeft: {
          name: 'il',
          level: 4,
          children: [
            {
              name: '_8',
              level: 5
            },
            {
              name: 'li',
              level: 5
            }
          ]
        },
        childRight: {
          name: 'it',
          level: 4,
          children: [
            {
              name: '_9',
              level: 5
            },
            {
              name: '_0',
              level: 5
            }
          ]
        },
        radius: 17,
        parent: 'M',
        level: 3,
        cx: 1125,
        cy: 231.66666666666669,
        stroke: 'steelblue'
      },
      {
        name: 'il',
        childLeft: {
          name: '_8',
          level: 5
        },
        childRight: {
          name: 'li',
          level: 5
        },
        radius: 17,
        parent: 'O',
        level: 4,
        cx: 1087.5,
        cy: 298.33333333333337,
        stroke: 'steelblue'
      },
      {
        name: '_8',
        childLeft: '',
        childRight: '',
        radius: 17,
        parent: 'il',
        level: 5,
        cx: 1068.75,
        cy: 365,
        stroke: 'steelblue'
      },
      {
        name: 'li',
        childLeft: '',
        childRight: '',
        radius: 17,
        parent: 'il',
        level: 5,
        cx: 1106.25,
        cy: 365,
        stroke: 'steelblue'
      },
      {
        name: 'it',
        childLeft: {
          name: '_9',
          level: 5
        },
        childRight: {
          name: '_0',
          level: 5
        },
        radius: 17,
        parent: 'O',
        level: 4,
        cx: 1162.5,
        cy: 298.33333333333337,
        stroke: 'steelblue'
      },
      {
        name: '_9',
        childLeft: '',
        childRight: '',
        radius: 17,
        parent: 'it',
        level: 5,
        cx: 1143.75,
        cy: 365,
        stroke: 'steelblue'
      },
      {
        name: '_0',
        childLeft: '',
        childRight: '',
        radius: 17,
        parent: 'it',
        level: 5,
        cx: 1181.25,
        cy: 365,
        stroke: 'steelblue'
      }
    ]
  };

_.map(circles.tree, (circle) => {
    const pcx = circle.cx;
    const pcy = circle.cy;
    console.log("parent =", circle.name, "(", pcx, ",", pcy, ")");

    const leftChild = _.find(circles.tree, {"name": circle.childLeft.name});
    if (leftChild) {
        const lcx = leftChild.cx;
        const lcy = leftChild.cy;
        console.log("left child = ", leftChild.name, "(", lcx, ",", lcy, ")");
    }

    const rightChild = _.find(circles.tree, {"name": circle.childRight.name});
    if (rightChild) {
        const rcx = rightChild.cx;
        const rcy = rightChild.cy;
        console.log("right child = ", rightChild.name, "(", rcx, ",", rcy, ")");
    }
})