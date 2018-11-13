const sw = [function (t, n) {
        t.exports = {
          padme: 'Padm&eacute; Amidala',
          kylo: 'Kylo Ren',
          finn: 'Finn',
          boba_fett: 'Boba Fett ',
          leia: 'Princess Leia',
          luke: 'Luke Skywalker',
          han: 'Han Solo',
          yoda: 'Yoda',
          obi_wan: 'Obi-Wan Kenobi',
          anakin: 'Anakin Skywalker',
          palpatine: 'Emporer Palpatine',
          rey: 'Rey',
        };
      },

      function (t, n) {
        var e = [{
          order: 'q1',
          id: 'swpi_show_respect',
          trait: 'swpi_conformity',
          weight: '0.5',
          question: 'This person believes they should <strong>always show respect to their parents and to older people</strong>. It is important to them to <strong>be obedient</strong>.',
          question_bold: 'This person believes they should <strong>always show respect to their parents and to older people</strong>. It is important to them to <strong>be obedient</strong>.',
        }, {
          order: 'q2',
          id: 'swpi_religion',
          trait: 'swpi_tradition',
          weight: '0.5',
          question: 'Religious belief is important to this person. They try hard to do what their religion requires.',
          question_bold: '<strong>Religious belief</strong> is important to this person. They try hard to <strong>do what their religion requires</strong>.',
        }, {
          order: 'q3',
          id: 'swpi_help_people',
          trait: 'swpi_benevolence',
          weight: '0.5',
          question: "It's very important to this person to help the people around them. This person wants to care for their well-being.",
          question_bold: "It's very important to this person to <strong>help the people around them</strong>. This person wants to <strong>care for their well-being</strong>.",
        }, {
          order: 'q4',
          id: 'swpi_treated_equal',
          trait: 'swpi_universalism',
          weight: '0.5',
          question: "This person thinks it's important that every person in the world be treated equally. They believe everyone should have equal opportunities in life.",
          question_bold: "This person thinks it's important that <strong>every person in the world be treated equally</strong>. They believe <strong>everyone should have equal opportunities</strong> in life. ",
        }, {
          order: 'q5',
          id: 'swpi_interested',
          trait: 'swpi_self-direction',
          weight: '0.5',
          question: "This person thinks it's important to be interested in things. They like to be curious and to try to understand all sorts of things.",
          question_bold: "This person thinks it's important to <strong>be interested in things</strong>. They like to <strong>be curious and to try to understand</strong> all sorts of things.",
        }, {
          order: 'q6',
          id: 'swpi_take_risks',
          trait: 'swpi_stimulation',
          weight: '0.5',
          question: 'This person likes to take risks. They are always looking for adventures.',
          question_bold: 'This person likes to <strong>take risks</strong>. They are always looking for<strong> adventures</strong>.',
        }, {
          order: 'q7',
          id: 'swpi_have_fun',
          trait: 'swpi_hedonism',
          weight: '0.5',
          question: 'This person seeks every chance they can to have fun. It is important to them to do things that give them pleasure.',
          question_bold: 'This person seeks every chance they can to <strong>have fun</strong>. It is important to them to <strong>do things that give them pleasure</strong>.',
        }, {
          order: 'q8',
          id: 'swpi_getting_ahead',
          trait: 'swpi_achievement',
          weight: '0.5',
          question: 'Getting ahead in life is important to this person. This person strives to do better than others.',
          question_bold: '<strong>Getting ahead in life</strong> is important to this person. This person strives to <strong>do better than others</strong>.',
        }, {
          order: 'q9',
          id: 'swpi_be_leader',
          trait: 'swpi_power',
          weight: '0.5',
          question: 'This person always wants to be the one who makes the decisions. They like to be the leader.',
          question_bold: 'This person always wants to be the one who <strong>makes the decisions</strong>. They <strong> like to be the leader</strong>.',
        }, {
          order: 'q10',
          id: "swpi_organized",
          trait: "swpi_security",
          weight: "0.5",
          question: "It is important to this person that things be organized and clean. They really do not like things to be a mess.",
          question_bold: "It is important to this person that things be <strong>organized and clean</strong>. They really <strong>do not like things to be a mess</strong>."
        }, {
          order: "q11",
          id: "swpi_behave_properly",
          trait: "swpi_conformity",
          weight: "0.5",
          question: "It is important to this person to always behave properly. This person wants to avoid doing anything people would say is wrong.",
          question_bold: "It is important to this person to <strong>always behave properly</strong>. This person wants to <strong>avoid doing anything people would say is wrong</strong>."
        }, {
          order: "q12",
          id: "swpi_traditional_ways",
          trait: "swpi_tradition",
          weight: "0.5",
          question: "This person thinks it is best to do things in traditional ways. It is important to this person to keep up the customs they have learned.",
          question_bold: "This person thinks it is best to do things in <strong>traditional ways</strong>. It is important to this person to <strong>keep up the customs they have learned</strong>."
        }, {
          order: "q13",
          id: "swpi_needs_of_others",
          trait: "swpi_benevolence",
          weight: "0.5",
          question: "It is important to this person to respond to the needs of others. This person tries to support those they know.",
          question_bold: "It is important to this person to <strong>respond to the needs of others</strong>. This person tries to <strong>support those they know</strong>."
        }, {
          order: "q14",
          id: "swpi_live_in_harmony",
          trait: "swpi_universalism",
          weight: "0.5",
          question: "This person believes all the world's people should live in harmony. Promoting peace among all groups in the world is important to them.",
          question_bold: "This person believes <strong>all the world's people should live in harmony</strong>. <strong>Promoting peace among all groups</strong> in the world is important to them."
        }, {
          order: "q15",
          id: "swpi_new_ideas",
          trait: "swpi_self-direction",
          weight: "0.5",
          question: "Thinking up new ideas and being creative is important to this person. This person likes to do things in their own original way.",
          question_bold: "<strong>Thinking up new ideas and being creative</strong> is important to this person. This person likes to <strong>do things in their own original way</strong>."
        }, {
          order: "q16",
          id: "swpi_try_new_things",
          trait: "swpi_stimulation",
          weight: "0.5",
          question: "This person thinks it is important to do lots of different things in life. They are always looking for new things to try.",
          question_bold: "This person thinks it is important to <strong>do lots of different things in life</strong>. They are always looking for<strong> new things to try</strong>."
        }, {
          order: "q17",
          id: "swpi_enjoy_life",
          trait: "swpi_hedonism",
          weight: "0.5",
          question: "This person really wants to enjoy life. Having a good time is very important to them.",
          question_bold: "This person really wants to <strong>enjoy life</strong>. <strong>Having a good time</strong> is very important to them."
        }, {
          order: "q18",
          id: "swpi_successful",
          trait: "swpi_achievement",
          weight: "0.5",
          question: "Being very successful is important to this person. This person likes to impress other people.",
          question_bold: "<strong>Being very successful</strong> is important to this person. This person <strong>likes to impress other people</strong>."
        }, {
          order: "q19",
          id: "swpi_be_in_charge",
          trait: "swpi_power",
          weight: "0.5",
          question: "It is important to this person to be in charge and tell others what to do. They want people to do what they say.",
          question_bold: "It is important to this person to <strong>be in charge and tell others what to do</strong>. They want people to <strong>do what they say</strong>."
        }, {
          order: "q20",
          id: "swpi_stable_government",
          trait: "swpi_security",
          weight: "0.5",
          question: "Having a stable government is important to this person. This person is concerned that the social order be protected.",
          question_bold: "Having a <strong>stable government </strong>is important to this person. This person is<strong> concerned that the social order be protected</strong>."
        }, {
          order: "q21",
          id: "swpi_authority_over_other",
          trait: "swpi_an",
          weight: "0.33333333",
          question: "This person likes to have authority over other people. People always seem to recognize their authority.",
          question_bold: "This person <strong>likes to have authority over other people</strong>. People always seem to <strong>recognize their authority</strong>."
        }, {
          order: "q22",
          id: "swpi_knows_good_person",
          trait: "swpi_an",
          weight: "0.33333333",
          question: "This person knows that they're a good person because everybody keeps telling them so. They will usually show off if they get the chance.",
          question_bold: "This person <strong>knows that they're a good person because everybody keeps telling them so</strong>. They will <strong>usually show off if they get the chance</strong>."
        }, {
          order: "q23",
          id: "swpi_expects_great_deal",
          trait: "swpi_an",
          weight: "0.33333333",
          question: "This person expects a great deal from other people. They will never be satisfied until they get all that they deserve.",
          question_bold: "This person <strong>expects a great deal from other people</strong>. They will <strong>never be satisfied until they get all that they deserve</strong>."
        }, {
          order: "q24",
          id: "swpi_will_be_well_known",
          trait: "swpi_cn",
          weight: "0.5",
          question: "This person will be well known for the good deeds they will have done. They will make the world a much more beautiful place.",
          question_bold: "This person will be <strong>well known for the good deeds </strong>they will have done. They will <strong>make the world a much more beautiful place</strong>."
        }, {
          order: "q25",
          id: "swpi_most_caring_person",
          trait: "swpi_cn",
          weight: "0.5",
          question: "This person is the most caring person in their social surrounding. They greatly enrich others' lives.",
          question_bold: "This person is the <strong>most caring person</strong> in their social surrounding. They <strong>greatly enrich others' lives</strong>."
        }, {
          order: "q26",
          id: "swpi_high_self_esteem",
          trait: "swpi_self-esteem",
          weight: "1",
          question: "This person is a person with high self-esteem. They take a positive attitude towards themselves.",
          question_bold: "This person is a person with <strong>high self-esteem</strong>. They take a <strong>positive attitude towards themselves</strong>."
        }, {
          order: "q27",
          id: "swpi_misunderstood",
          trait: "swpi_subjective",
          weight: "1",
          question: "This person feels as though most people in their city/town do not understand them. They often feel that somehow they don't fit in.",
          question_bold: "This person feels as though <strong>most people in their city/town do not understand them</strong>. They often feel that <strong>somehow they don't fit in</strong>."
        }];
        e.columns = ["order", "id", "trait", "weight", "question", "question_bold"],
          t.exports = e
      },
      function(t, n) {
        t.exports = {
          swpi_power: "power",
          swpi_achievement: "achievement",
          swpi_hedonism: "pleasure",
          swpi_stimulation: "stimulation",
          "swpi_self-direction": "independence",
          swpi_universalism: "care for the world",
          swpi_benevolence: "benevolence",
          swpi_tradition: "tradition",
          swpi_conformity: "following the rules",
          swpi_security: "safety",
          "swpi_self-esteem": "self-esteem",
          swpi_subjective: "feeling unique",
          swpi_an: "having high expectations",
          swpi_cn: "good deeds"
        }
      }];

      module.exports = {sw};
