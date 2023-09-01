import { Country } from "../interfaces/country";

Er// Generated by CodiumAI

describe('CountriesService', () => {

});

    // Test that the searchCountryById method in the CountriesService class returns a valid response when searching for a country by ID
    it('should return a valid response when searching for a country by ID', () => {
      // Arrange
      const id = 'USA';
      const expectedCountry: Country = {
        name: {
          common: 'United States',
          official: 'United States of America',
          nativeName: {
            eng: {
              official: 'United States of America',
              common: 'United States'
            }
          }
        },
        tld: ['.us'],
        cca2: 'US',
        ccn3: '840',
        cca3: 'USA',
        cioc: 'USA',
        independent: true,
        status: 'officially-assigned',
        unMember: true,
        currencies: {
          USD: {
            name: 'United States dollar',
            symbol: '$'
          }
        },
        idd: {
          root: '+1',
          suffixes: ['201', '202', '203', '205', '206', '207', '208', '209', '210', '212', '213', '214', '215', '216', '217', '218', '219', '220', '224', '225', '227', '228', '229', '231', '234', '236', '239', '240', '248', '251', '252', '253', '254', '256', '260', '262', '264', '267', '268', '269', '270', '272', '274', '276', '278', '281', '283', '284', '286', '301', '302', '303', '304', '305', '307', '308', '309', '310', '312', '313', '314', '315', '316', '317', '318', '319', '320', '321', '323', '325', '327', '330', '331', '334', '336', '337', '339', '346', '347', '351', '352', '360', '361', '364', '380', '385', '386', '401', '402', '404', '405', '406', '407', '408', '409', '410', '412', '413', '414', '415', '417', '419', '423', '424', '425', '430', '432', '434', '435', '440', '442', '443', '445', '447', '458', '463', '464', '469', '470', '475', '478', '479', '480', '484', '501', '502', '503', '504', '505', '507', '508', '509', '510', '512']
        },
        capital: ['Washington, D.C.'],
        altSpellings: ['US','USA','United States of America'],
        region: "Americas",
        subregion: "Northern America",
        languages: {
          eng: "English"
        },
        translations: {
          ces: {
            official: "Spojené státy americké",
            common: "Spojené státy"
          },
          deu: {
            official: "Vereinigte Staaten von Amerika",
            common: "Vereinigte Staaten"
          },
          est: {
            official: "Ameerika Ühendriigid",
            common: "Ameerika Ühendriigid"
          },
          fin: {
            official: "Amerikan yhdysvallat",
            common: "Yhdysvallat"
          },
          fra: {
            official: "États-Unis d'Amérique",
            common: "États-Unis"
          },
          hrv: {
            official: "Sjedinjene Američke Države",
            common: "Sjedinjene Američke Države"
          },
          hun: {
            official: "Amerikai Egyesült Államok",
            common: "Amerikai Egyesült Államok"
          },
          ita: {
            official: "Stati Uniti d'America",
            common: "Stati Uniti d'America"
          },
          jpn: {
            official: "アメリカ合衆国",
            common: "アメリカ合衆国"
          },
          kor: {
            official: "아메리카 합중국",
            common: "미국"
          },
          nld: {
            official: "Verenigde Staten van Amerika",
            common: "Verenigde Staten"
          },
          per: {
            official: "ایالات متحده آمریکا",
            common: "ایالات متحده آمریکا"
          },
          pol: {
            official: "Stany Zjednoczone Ameryki",
            common: "Stany Zjednoczone"
          },
          por: {
            official: "Estados Unidos da América",
            common: "Estados Unidos"
          },
          rus: {
            official: "Соединенные Штаты Америки",
            common: "Соединённые Штаты Америки"
          },
          slk: {
            official: "Spojené štáty americké",
            common: "Spojené štáty americké"
          },
          spa: {
            official: "Estados Unidos de América",
            common: "Estados Unidos"
          },
          swe: {
            official: "Förenta staterna",
            common: "USA"
          },
          urd: {
            official: "ریاستہائے متحدہ امریکا",
            common: "ریاستہائے متحدہ"
          },
          zho: {
            official: "美利坚合众国",
            common: "美国"
          }
        },
        latlng: [38, -97],
        landlocked: false,
        area: 9629091,
        demonyms: {
          eng: {
            f: "American",
            m: "American"
          }
        },
        flag: "https://restcountries.com/data/usa.svg",
        maps: {
          googleMaps: "https://goo.gl/maps/PRVvRn8XWZT2",
          openStreetMaps: "https://www.openstreetmap.org/relation/192307"
        },
        population: 323947000,
        gini: {
          '2017': 48
        },
        fifa: "USA",
        car: {
          signs: ["USA"],
          side: "right"
        },
        timezones: ["UTC-12:00", "UTC-11:00", "UTC-10:00", "UTC-09:00", "UTC-08:00", "UTC-07:00", "UTC-06:00", "UTC-05:00", "UTC-04:00", "UTC+10:00", "UTC+12:00"],
        continents: ["North America"],
        flags: {
          svg: "https://restcountries.com/data/usa.svg",
          png: "https://restcountries.com/data/usa.png"
        },
        coatOfArms: {
          png: "https://restcountries.com/data/usa.png",
          svg: "https://restcountries.com/data/usa.svg"
        },
        startOfWeek: "sunday",
        capitalInfo: {
          latlng: [38.895, -77.03666666666667],
          population: 601723,
          elevation: 0,
          area: 177,
          demonym: "Washingtonian",
          timeZone: "America/New_York"
        }
      };

      // Act
      const result$ = countriesService.searchCountryById(id);

      // Assert
      result$.subscribe((result) => {
        expect(result).toEqual(expectedCountry);
      });
    });
