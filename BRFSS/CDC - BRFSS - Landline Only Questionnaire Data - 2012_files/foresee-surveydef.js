﻿FSR.surveydefs = [{
    name: 'browse',
    invite: {
        when: 'onentry',
        locales: [{
            locale: 'es',
            content: '<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.0 Transitional//EN\"><HTML><HEAD><TITLE>Foresee Invite</TITLE></HEAD><BODY><div id=\"fsrinvite\"><div id=\"fsrcontainer\"><div class=\"fsri_sitelogo\"><img src=\"{%baseHref%}sitelogo.gif\" alt=\"Site Logo\"></div><div class=\"fsri_fsrlogo\"><img src=\"{%baseHref%}fsrlogo.gif\" alt=\"Site Logo\"></div></div><div class=\"fsri_body\">\
		<b><font size=\"3\">Nos gustaría recibir sus comentarios.</b></font>\
		<br><br>Gracias por visitar nuestro sitio. Usted ha sido seleccionado al azar para participar en una encuesta de satisfacción del cliente, que nos permitirá saber en qué podemos mejorar la experiencia en el sitio Web.\
		<br><br><font size=\"1\">Esta encuesta es realizada por ForeSee Results, una compañía independiente.</font><br></div></div></BODY></HTML>',
            buttons: {
                accept: 'Sí, realizaré comentarios.',
                decline: 'No, gracias.'
            }
        }]
    },
    pop: {
        when: 'now'
    },
    criteria: {
        sp: 2,
        lf: 3,
        locales: [{
            locale: 'es',
            sp: 5,
            lf: 3
        }]
    },
    include: {
        urls: ['.']
    }
}];
FSR.properties = {
   repeatdays: 30,

   repeatoverride: false,

   altcookie: {
   },

    language: {
        locale: 'en',
        src: 'location',
        locales: [{
            match: '/spanish/',
            locale: 'es'
        }, {
            match: '/espanol/',
            locale: 'es'
        }, {
            match: '/es/',
            locale: 'es'
        }, {
            match: 'espanol',
            locale: 'es'
        }]
    },

   exclude: {
   },

   zIndexPopup: 10000,

   ignoreWindowTopCheck: false,

   reverseButtons: false,

   ipexclude: 'fsr$ip',

   invite: {
      /* desktop */
	 /*
      content: '<div id=\"fsrinvite\"><div id=\"fsrcontainer\"><div class=\"fsri_sitelogo\"><img src=\"{%baseHref%}sitelogo.gif\" alt=\"Site Logo\"></div><div class=\"fsri_fsrlogo\"><img src=\"{%baseHref%}fsrlogo.gif\" alt=\"Site Logo\"></div></div><div class=\"fsri_body\">\
      <div style=\"padding:0 0 8px 0;font-size:medium;font-weight:bold;\">We\'d welcome your feedback!</div>\
      <div style=\"padding:0 0 8px 0;\">Thank you for visiting our website. You have been selected to participate<br>in a brief customer satisfaction survey to let us know how we can improve<br>your experience.</div>\
      <div style=\"font-weight:bold;\">The survey is designed to measure your entire experience, please look for it at the <u>conclusion</u> of your visit.</div>\
      </div></div>',
      */
      
      content: '<div id=\"fsrinvite\"><div id=\"fsrcontainer\"><div class=\"fsri_sitelogo\"><img src=\"{%baseHref%}sitelogo.gif\" alt=\"Site Logo\"></div><div class=\"fsri_fsrlogo\"><img src=\"{%baseHref%}fsrlogo.gif\" alt=\"Site Logo\"></div></div><div class=\"fsri_body\">\
      <div style=\"padding:0 0 8px 0;font-size:medium;font-weight:bold;\">We\'d welcome your feedback!</div>\
      <div style=\"padding:0 0 8px 0;\">Thank you for visiting our website. You have been selected to participate<br>in a brief customer satisfaction survey to let us know how we can improve<br>your experience.</div>\
      </div></div>',
      

      /* mobile
      content: '<div id=\"fsrinvite\"><div id=\"fsrcontainer\"><div class=\"fsri_sitelogo\"><img src=\"{%baseHref%}sitelogo.gif\" alt=\"Site Logo\"></div><div class=\"fsri_fsrlogo\"><img src=\"{%baseHref%}fsrlogo.gif\" alt=\"Site Logo\"></div></div><div class=\"fsri_body\">\
      <div style=\"padding:0 0 5px 0;font-size:medium;font-weight:bold;\">We\'d welcome your feedback!</div>\
      <div style=\"padding:0 0 0 0;\">Thank you for visiting our website. You have been selected to participate in a brief customer satisfaction survey to let us know how we can improve your experience.</div>\
      </div></div>',
      */
      
      /* desktop */
      footer: '<div div id=\"fsrcontainer\"><div style=\"float:left;width:80%;font-size:8pt;text-align:left;line-height:12px;\">This survey is conducted by an independent company ForeSee,<br>on behalf of the site you are visiting.</div><div style=\"float:right;font-size:8pt;\"><a target="_blank" title="Validate TRUSTe privacy certification" href="//privacy-policy.truste.com/click-with-confidence/ctv/en/www.foreseeresults.com/seal_m"><img border=\"0\" src=\"{%baseHref%}truste.png\" alt=\"Validate TRUSTe Privacy Certification\"></a></div></div>',

      /* mobile
      footer: '<div div id=\"fsrcontainer\"><div style=\"float:left;width:50%;font-size:8pt;text-align:left;line-height:12px;\">Conducted by ForeSee</div><div style=\"float:right;font-size:8pt;text-align:right;\"><a target="_blank" title="Validate TRUSTe privacy certification" href="//privacy-policy.truste.com/click-with-confidence/ctv/en/www.foreseeresults.com/seal_m"><img style=\"width:50%;\" border=\"0\" src=\"{%baseHref%}truste.png\" alt=\"Validate TRUSTe Privacy Certification\"></a></div></div>',
      */
      
      exclude: {
         local: [],
         referrer: []
      },
      include: {
         local: ['.']
      },

      /* desktop */
      width: '500',
      /* mobile
      width: {p: '260', l: '380'},
      text: {p: '100%', l: '70%'},
      */
      bgcolor: '#333',
      opacity: 0.7,
      x: 'center',
      y: 'center',
      delay: 0,
      timeout: 0,
      buttons: {
         accept: "Yes, I'll give feedback",
         decline: 'No thanks'
      },
      hideOnClick: false,
      /* desktop */
      css: 'foresee-dhtml.css',
      /* mobile
      css: 'foresee-dhtml-mobile.css',
      */
      hide: [],
      type: 'dhtml',
      /* desktop */
      url: 'invite.html'
      /* mobile
      url: 'invite-mobile.html'
      */
   },

   tracker: {
	  width: '690',
	  height: '415',
      timeout: 3,
      adjust: true,
      alert: {
         enabled: true,
         message: 'The survey is now available.'
      },
      url: 'tracker.html',
	          locales: [{
            locale: 'es',
            url: 'tracker_es.html'
        }]
   },

   survey: {
      width: 690,
      height: 600
   },

   qualifier: {
      footer: '<div div id=\"fsrcontainer\"><div style=\"float:left;width:80%;font-size:8pt;text-align:left;line-height:12px;\">This survey is conducted by an independent company ForeSee,<br>on behalf of the site you are visiting.</div><div style=\"float:right;font-size:8pt;\"><a target="_blank" title="Validate TRUSTe privacy certification" href="//privacy-policy.truste.com/click-with-confidence/ctv/en/www.foreseeresults.com/seal_m"><img border=\"0\" src=\"{%baseHref%}truste.png\" alt=\"Validate TRUSTe Privacy Certification\"></a></div></div>',
      width: '690',
      height: '500',
      bgcolor: '#333',
      opacity: 0.7,
      x: 'center',
      y: 'center',
      delay: 0,
      buttons: {
         accept: 'Continue'
      },
      hideOnClick: false,
      css: 'foresee-dhtml.css',
      url: 'qualifying.html'
   },

   cancel: {
      url: 'cancel.html',
      width: '690',
      height: '400'
   },

   pop: {
      what: 'survey',
      after: 'leaving-site',
      pu: false,
      tracker: true
   },

   meta: {
      referrer: true,
      terms: true,
      ref_url: true,
      url: true,
      url_params: false,
      user_agent: false
   },

   events: {
      enabled: true,
      id: true,
      codes: {
         purchase: 800,
         items: 801,
         dollars: 802,
         followup: 803,
         information: 804,
         content: 805
      },
      pd: 7,
      custom: {}
   },

   pool: 200,

   previous: false,

   analytics: {
      google: false
   },

       cpps: {
        GovDelivery: {
            source: 'url',
            init: 'N',
            patterns: [{
                regex: 'source=govdelivery',
                value: 'Y'
            }]
        },
		TopTier: {
                  source: 'url',
                  patterns: [{
                        regex: 'cdc.gov/$',
                        value: 'Y'
                  },{
                        regex: 'cdc.gov/index.htm',
                        value: 'Y'
                  },{
                        regex: '/az/',
                        value: 'Y'
                  },{
                        regex: '/contact/',
                        value: 'Y'
                  },{
                        regex: '/emailupdates/',
                        value: 'Y'
                  },{
                        regex: '/DataStatistics/',
                        value: 'Y'
                  },{
                        regex: '/DiseasesConditions/',
                        value: 'Y'
                  },{
                        regex: '/Environmental/',
                        value: 'Y'
                  },{
                        regex: '/Features/',
                        value: 'Y'
                  },{
                        regex: '/HealthyLiving/',
                        value: 'Y'
                  },{
                        regex: '/InjuryViolenceSafety/',
                        value: 'Y'
                  },{
                        regex: '/LifeStages/',
                        value: 'Y'
                  },{
                        regex: '/Other/',
                        value: 'Y'
                  },{
                        regex: '/Publications/',
                        value: 'Y'
                  },{
                        regex: '/TemplatePackage/',
                        value: 'Y'
                  },{
                        regex: '/ToolsResources/',
                        value: 'Y'
                  },{
                        regex: '/Workplace/',
                        value: 'Y'
                  },{
                        regex: '/metrics/',
                        value: 'Y'
                  },{
                        regex: '/privacy/',
                        value: 'Y'
                  },{
                        regex: '/diversity/nofearact/',
                        value: 'Y'
                  },{
                        regex: '/widgets/',
                        value: 'Y'
                  },{
                        regex: '/about/',
                        value: 'Y'
                  },{
                        regex: '/outbreaks/',
                        value: 'Y'
                  },{
                        regex: '/mobile/',
                        value: 'Y'
                  },{
                        regex: '/LifeStages/',
                        value: 'Y'
                  },{
                        regex: '/syndication/',
                        value: 'Y'
                  }]
            },
			OSELS: {
                  source: 'url',
                  patterns: [{
                        regex: '/phin/',
                        value: 'Y'
                  },{
                        regex: '/ehrmeaningfuluse/',
                        value: 'Y'
                  },{
                        regex: '/ophss/csels',
                        value: 'Y'
                  }]
            },
			OADC: {
                  source: 'url',
                  patterns: [{
                        regex: '/socialmedia/',
                        value: 'Y'
                  },{
                        regex: '/widgets/',
                        value: 'Y'
                  },{
                        regex: '/VitalSigns/',
                        value: 'Y'
                  },{
                        regex: '/WinnableBattles/',
                        value: 'Y'
                  },{
                        regex: '/Media/',
                        value: 'Y'
                  },{
                        regex: '/healthcommunication/',
                        value: 'Y'
                  },{
                        regex: '/cdctv/',
                        value: 'Y'
                  },{
                        regex: 'www2c.cdc.gov/podcasts/',
                        value: 'Y'
                  },{
                        regex: 'www2c.cdc.gov/ecards/',
                        value: 'Y'
                  },{
                        regex: 'phil.cdc.gov/phil/',
                        value: 'Y'
                  },{
                        regex: '/24-7/',
                        value: 'Y'
                  },{
                        regex: '/cdc-info/',
                        value: 'Y'
                  },{
                        regex: '/healthliteracy/',
                        value: 'Y'
                  },{
                        regex: '/publications/panflu/',
                        value: 'Y'
                  },{
                        regex: '/museum/',
                        value: 'Y'
                  },{
                        regex: '/nchcmm/',
                        value: 'Y'
                  },{
                        regex: '/speakers/',
                        value: 'Y'
                  },{
                        regex: '/about/grand-rounds/',
                        value: 'Y'
                  }]
            },
			Flu: {
                  source: 'url',
                  patterns: [{
                        regex: '/flu/',
                        value: 'Y'
                  },{
                        regex: '/h1n1flu/',
                        value: 'Y'
                  }]
            },
			NCHHSTP: {
                  source: 'url',
                  patterns: [{
                        regex: '/actagainstaids/',
                        value: 'Y'
                  },{
                        regex: '/botusa/',
                        value: 'Y'
                  },{
                        regex: '/tuskegee/',
                        value: 'Y'
                  },{
                        regex: '/condomeffectiveness/',
                        value: 'Y'
                  },{
                        regex: '/correctionalhealth/',
                        value: 'Y'
                  },{
                        regex: '/hpv/',
                        value: 'Y'
                  },{
                        regex: '/msmhealth/',
                        value: 'Y'
                  },{
                        regex: '/lgbthealth/',
                        value: 'Y'
                  },{
                        regex: '/pwud/',
                        value: 'Y'
                  },{
                        regex: '/sexualhealth/',
                        value: 'Y'
                  },{
                        regex: '/socialdeterminants/',
                        value: 'Y'
                  },{
                        regex: '/oid/',
                        value: 'Y'
                  },{
                        regex: '/nchhstp/',
                        value: 'Y'
                  },{
                        regex: '/healthyyouth/',
                        value: 'Y'
                  },{
                        regex: '/tb/',
                        value: 'Y'
                  },{
                        regex: '/std/',
                        value: 'Y'
                  },{
                        regex: '/hiv/',
                        value: 'Y'
                  },{
                        regex: '/hepatitis/',
                        value: 'Y'
                  },{
                        regex: '/gshs/',
                        value: 'Y'
                  },{
                        regex: '/youthcampaign/',
                        value: 'Y'
                  },{
                        regex: '/idu/',
                        value: 'Y'
                  },{
                        regex: '/KnowHepatitisB/',
                        value: 'Y'
                  },{
                        regex: '/knowmorehepatitis/',
                        value: 'Y'
                  },{
                        regex: '/outreach/',
                        value: 'Y'
                  },{
                        regex: '/stdconference/',
                        value: 'Y'
                  },{
                        regex: '/trendstatement',
                        value: 'Y'
                  }]
            },
			Injury: {
                  source: 'url',
                  patterns: [{
                        regex: '/traumacare/',
                        value: 'Y'
                  },{
                        regex: '/injury/',
                        value: 'Y'
                  },{
                        regex: '/HomeandRecreationalSafety/',
                        value: 'Y'
                  },{
                        regex: '/SafeChild/',
                        value: 'Y'
                  },{
                        regex: '/MotorVehicleSafety/',
                        value: 'Y'
                  },{
                        regex: '/ParentsAretheKey/',
                        value: 'Y'
                  },{
                        regex: '/ViolencePrevention/',
                        value: 'Y'
                  },{
                        regex: '/TraumaticBrainInjury/',
                        value: 'Y'
                  },{
                        regex: '/Concussion/',
                        value: 'Y'
                  },{
                        regex: '/injuryresponse/',
                        value: 'Y'
                  },{
                        regex: '/fieldtriage/',
                        value: 'Y'
                  }]
            },
		EPR: {
                  source: 'url',
                  patterns: [{
                        regex: 'emergency.cdc.gov',
                        value: 'Y'
                  }]
            },
		CommunityGuide: {
                  source: 'url',
                  patterns: [{
                        regex: 'thecommunityguide.org',
                        value: 'Y'
                  }]
            },
		Chronic: {
                  source: 'url',
                  patterns: [{
                        regex: '/bam/',
                        value: 'Y'
                  },{
                        regex: '/nccdphp/dph/',
                        value: 'Y'
                  },{
                        regex: '/nccdphp/dch/',
                        value: 'Y'
                  },{
                        regex: '/won/',
                        value: 'Y'
                  },{
                        regex: '/makinghealtheasier/',
                        value: 'Y'
                  },{
                        regex: '/nationalhealthyworksite/',
                        value: 'Y'
                  },{
                        regex: '/coordinatedchronic/',
                        value: 'Y'
                  },{
                        regex: '/aging/',
                        value: 'Y'
                  },{
                        regex: '/alcohol/',
                        value: 'Y'
                  },{
                        regex: '/arthritis/',
                        value: 'Y'
                  },{
                        regex: '/phhsblockgrant/',
                        value: 'Y'
                  },{
                        regex: '/nccdphp/cdi/',
                        value: 'Y'
                  },{
                        regex: '/copd/',
                        value: 'Y'
                  },{
                        regex: '/epilepsy/',
                        value: 'Y'
                  },{
                        regex: '/hrqol/',
                        value: 'Y'
                  },{
                        regex: '/ibd/',
                        value: 'Y'
                  },{
                        regex: '/ic/',
                        value: 'Y'
                  },{
                        regex: '/mentalhealth/',
                        value: 'Y'
                  },{
                        regex: '/prc/',
                        value: 'Y'
                  },{
                        regex: '/sleep/',
                        value: 'Y'
                  },{
                        regex: '/healthycommunitiesprogram/',
                        value: 'Y'
                  },{
                        regex: '/cancer/',
                        value: 'Y'
                  },{
                        regex: '/spanish/cancer/',
                        value: 'Y'
                  },{
                        regex: '/diabetes/',
                        value: 'Y'
                  },{
                        regex: '/visionhealth/',
                        value: 'Y'
                  },{
                        regex: '/cholesterol',
                        value: 'Y'
                  },{
                        regex: '/dhdsp/',
                        value: 'Y'
                  },{
                        regex: '/heartdisease/',
                        value: 'Y'
                  },{
                        regex: '/bloodpressure/',
                        value: 'Y'
                  },{
                        regex: '/salt/',
                        value: 'Y'
                  },{
                        regex: '/stroke/',
                        value: 'Y'
                  },{
                        regex: '/wisewoman/',
                        value: 'Y'
                  },{
                        regex: '/breastfeeding/',
                        value: 'Y'
                  },{
                        regex: '/nccdphp/dnpao/',
                        value: 'Y'
                  },{
                        regex: '/obesity/',
                        value: 'Y'
                  },{
                        regex: '/pednss/',
                        value: 'Y'
                  },{
                        regex: '/physicalactivity/',
                        value: 'Y'
                  },{
                        regex: '/healthyweight/',
                        value: 'Y'
                  },{
                        regex: '/leanworks/',
                        value: 'Y'
                  },{
                        regex: '/nutrition/',
                        value: 'Y'
                  },{
                        regex: '/ifps/',
                        value: 'Y'
                  },{
                        regex: '/nccdphp/sgr/sgr.htm',
                        value: 'Y'
                  },{
                        regex: '/nccdphp/dnpao/hwi/',
                        value: 'Y'
                  },{
                        regex: '/nccdphp/dnpao/growthcharts/',
                        value: 'Y'
                  },{
                        regex: '/nccdphp/dnpa/socialmarketing/training/',
                        value: 'Y'
                  },{
                        regex: '/immpact/',
                        value: 'Y'
                  },{
                        regex: '/fluoridation/',
                        value: 'Y'
                  },{
                        regex: '/nohss/',
                        value: 'Y'
                  },{
                        regex: '/oralhealth/',
                        value: 'Y'
                  },{
                        regex: '/reproductivehealth/',
                        value: 'Y'
                  },{
                        regex: '/art/',
                        value: 'Y'
                  },{
                        regex: '/prams',
                        value: 'Y'
                  },{
                        regex: '/sids/',
                        value: 'Y'
                  },{
                        regex: '/teenpregnancy/',
                        value: 'Y'
                  },{
                        regex: '/chronicdisease/',
                        value: 'Y'
                  },{
                        regex: '/workplacehealthpromotion/',
                        value: 'Y'
                  },{
                        regex: '/pcd/',
                        value: 'Y'
                  },{
                        regex: '/tobacco/',
                        value: 'Y'
                  },{
                        regex: 'drc.cdc.gov/',
                        value: 'Y'
                  },{
                        regex: '/psoriasis/',
                        value: 'Y'
                  },{
                        regex: '/workathealth/',
                        value: 'Y'
                  }]
            },
			NCIRD: {
                  source: 'url',
                  patterns: [{
                        regex: '/ncird/',
                        value: 'Y'
                  },{
                        regex: '/vaccines/',
                        value: 'Y'
                  },{
                        regex: '/getsmart/',
                        value: 'Y'
                  },{
                        regex: '/abcs/',
                        value: 'Y'
                  },{
                        regex: '/norovirus/',
                        value: 'Y'
                  },{
                        regex: '/measles/',
                        value: 'Y'
                  },{
                        regex: '/rotavirus/',
                        value: 'Y'
                  },{
                        regex: '/mumps/',
                        value: 'Y'
                  },{
                        regex: '/rubella/',
                        value: 'Y'
                  },{
                        regex: '/herpesbvirus/',
                        value: 'Y'
                  },{
                        regex: '/pertussis/',
                        value: 'Y'
                  },{
                        regex: '/rsv/',
                        value: 'Y'
                  },{
                        regex: '/meningitis/',
                        value: 'Y'
                  },{
                        regex: '/legionella/',
                        value: 'Y'
                  },{
                        regex: '/groupbstrep/',
                        value: 'Y'
                  },{
                        regex: '/conjunctivitis/',
                        value: 'Y'
                  },{
                        regex: '/cmv/',
                        value: 'Y'
                  },{
                        regex: '/ncidod/diseases/submenus/sub_pneumonia.htm',
                        value: 'Y'
                  },{
                        regex: '/ncidod/biotech/strep/',
                        value: 'Y'
                  },{
                        regex: '/ncidod/dmbd/diseaseinfo/psittacosis_t.htm',
                        value: 'Y'
                  },{
                        regex: '/ncidod/dbmd/diseaseinfo/groupastreptococcal_g.htm',
                        value: 'Y'
                  },{
                        regex: '/ncidod/dbmd/diseaseinfo/scarletfever_g.htm',
                        value: 'Y'
                  },{
                        regex: '/ncidod/dbmd/diseaseinfo/chlamydiapneumonia_t.htm',
                        value: 'Y'
                  },{
                        regex: '/ncidod/dbmd/diseaseinfo/mycoplasmapneum_t.htm',
                        value: 'Y'
                  },{
                        regex: '/hpv/vaccine.html',
                        value: 'Y'
                  },{
                        regex: '/surveillance/nrevss/',
                        value: 'Y'
                  },{
                        regex: '/ncidod/diseases/ebv.htm',
                        value: 'Y'
                  },{
                        regex: '/strep/',
                        value: 'Y'
                  },{
                        regex: 'emergency.cdc.gov/urdo/',
                        value: 'Y'
                  },{
                        regex: '/Adenovirus/',
                        value: 'Y'
                  },{
                        regex: '/Chickenpox/',
                        value: 'Y'
                  },{
                        regex: '/Hand-foot-mouth/',
                        value: 'Y'
                  },{
                        regex: '/parvovirusB19/',
                        value: 'Y'
                  },{
                        regex: '/SARS/',
                        value: 'Y'
                  },{
                        regex: '/Shingles/',
                        value: 'Y'
                  },{
                        regex: '/coronavirus/',
                        value: 'Y'
                  },{
                        regex: '/hi-disease/',
                        value: 'Y'
                  },{
                        regex: '/parainfluenza/',
                        value: 'Y'
                  },{
                        regex: '/meningococcal/',
                        value: 'Y'
                  },{
                        regex: '/ncird/software/elisa/',
                        value: 'Y'
                  },{
                        regex: '/diphtheria/',
                        value: 'Y'
                  },{
                        regex: '/pneumococcal/',
                        value: 'Y'
                  },{
                        regex: '/tetanus/',
                        value: 'Y'
                  },{
                        regex: '/surveillance/nvsn/',
                        value: 'Y'
                  },{
                        regex: '/non-polio/enterovirus/',
                        value: 'Y'
                  }]
            },
			NCEZID: {
                  source: 'url',
                  patterns: [{
                        regex: 'wwwnc.cdc.gov/travel',
                        value: 'Y'
                  },{
                        regex: 'wwwnc.cdc.gov/eid',
                        value: 'Y'
                  },{
                        regex: '/lyme/',
                        value: 'Y'
                  },{
                        regex: '/ncidod/dvbid/westnile/',
                        value: 'Y'
                  },{
                        regex: '/fungal/',
                        value: 'Y'
                  },{
                        regex: '/rabies/',
                        value: 'Y'
                  },{
                        regex: '/salmonella/',
                        value: 'Y'
                  },{
                        regex: '/hantavirus/',
                        value: 'Y'
                  },{
                        regex: '/nhsn/',
                        value: 'Y'
                  },{
                        regex: '/ncezid/',
                        value: 'Y'
                  },{
                        regex: '/healthywater/',
                        value: 'Y'
                  },{
                        regex: '/hicpac/',
                        value: 'Y'
                  },{
                        regex: '/vaccinesafety/',
                        value: 'Y'
                  },{
                        regex: '/dengue/',
                        value: 'Y'
                  },{
                        regex: '/ecoli/',
                        value: 'Y'
                  },{
                        regex: '/cfs/',
                        value: 'Y'
                  },{
                        regex: '/healthypets/',
                        value: 'Y'
                  },{
                        regex: '/ticks/',
                        value: 'Y'
                  },{
                        regex: '/foodsafety/',
                        value: 'Y'
                  },{
                        regex: '/listeria/',
                        value: 'Y'
                  },{
                        regex: '/ncidod/dvrd/molluscum/',
                        value: 'Y'
                  },{
                        regex: '/ncidod/dvrd/orf_virus/',
                        value: 'Y'
                  },{
                        regex: '/cholera/',
                        value: 'Y'
                  },{
                        regex: '/rodents/',
                        value: 'Y'
                  },{
                        regex: '/handwashing/',
                        value: 'Y'
                  },{
                        regex: '/immigrantrefugeehealth/',
                        value: 'Y'
                  },{
                        regex: '/yellowfever/',
                        value: 'Y'
                  },{
                        regex: '/leptospirosis/',
                        value: 'Y'
                  },{
                        regex: '/ncidod/dvrd/spb/',
                        value: 'Y'
                  },{
                        regex: '/animalimportation/',
                        value: 'Y'
                  },{
                        regex: '/foodborneburden/',
                        value: 'Y'
                  },{
                        regex: '/oubreaknet/',
                        value: 'Y'
                  },{
                        regex: '/plague/',
                        value: 'Y'
                  },{
                        regex: '/rmsf/',
                        value: 'Y'
                  },{
                        regex: '/tularemia/',
                        value: 'Y'
                  },{
                        regex: '/prions/',
                        value: 'Y'
                  },{
                        regex: '/dialysissafety/',
                        value: 'Y'
                  },{
                        regex: '/ncidod/dvrd/bse/',
                        value: 'Y'
                  },{
                        regex: '/qfever/',
                        value: 'Y'
                  },{
                        regex: '/japaneseencephalitis/',
                        value: 'Y'
                  },{
                        regex: '/foodnet/',
                        value: 'Y'
                  },{
                        regex: '/medicationsafety/',
                        value: 'Y'
                  },{
                        regex: '/anaplasmosis/',
                        value: 'Y'
                  },{
                        regex: '/ehrlichiosis/',
                        value: 'Y'
                  },{
                        regex: '/hai/',
                        value: 'Y'
                  },{
                        regex: '/handhygiene/',
                        value: 'Y'
                  },{
                        regex: '/mrsa/',
                        value: 'Y'
                  },{
                        regex: '/injectionsafety/',
                        value: 'Y'
                  },{
                        regex: '/sharpsafety/',
                        value: 'Y'
                  }]
            },
		OSTLTS: {
                  source: 'url',
                  patterns: [{
                        regex: '/phlp/',
                        value: 'Y'
                  },{
                        regex: '/phps/',
                        value: 'Y'
                  },{
                        regex: '/primarycare/',
                        value: 'Y'
                  },{
                        regex: '/stltpublichealth/',
                        value: 'Y'
                  },{
                        regex: '/nphpsp/',
                        value: 'Y'
                  },{
                        regex: '/phcommunities/',
                        value: 'Y'
                  },{
                        regex: '/phap/',
                        value: 'Y'
                  },{
                        regex: '/tribal/',
                        value: 'Y'
                  }]
            },
		GlobalHealth: {
                  source: 'url',
                  patterns: [{
                        regex: '/globalhealth/',
                        value: 'Y'
                  },{
                        regex: '/globalaids/',
                        value: 'Y'
                  },{
                        regex: '/malaria/',
                        value: 'Y'
                  },{
                        regex: '/parasites/',
                        value: 'Y'
                  },{
                        regex: '/haiticholera/',
                        value: 'Y'
                  },{
                        regex: '/polio/',
                        value: 'Y'
                  },{
                        regex: '/dpdx/',
                        value: 'Y'
                  }]
            },
		ATSDR: {
                  source: 'url',
                  patterns: [{
                        regex: 'cdc.gov/als/',
                        value: 'Y'
                  },{
                        regex: 'gis.cdc.gov/grasp/webmaps/',
                        value: 'Y'
                  },{
                        regex: 'blogs.cdc.gov/yourhealthyourenvironment/',
                        value: 'Y'
                  },{
                        regex: 'atsdr.cdc.gov',
                        value: 'Y'
                  }]
            },
			NCEH: {
                  source: 'url',
                  patterns: [{
                        regex: 'wwwn.cdc.gov/als/',
                        value: 'Y'
                  },{
                        regex: 'ephtracking.cdc.gov/',
                        value: 'Y'
                  },{
                        regex: '/nceh/',
                        value: 'Y'
                  },{
                        regex: '/nutritionreport/',
                        value: 'Y'
                  },{
                        regex: '/asthma/',
                        value: 'Y'
                  },{
                        regex: '/biomonitoring/',
                        value: 'Y'
                  },{
                        regex: '/climateandhealth/',
                        value: 'Y'
                  },{
                        regex: '/co/',
                        value: 'Y'
                  },{
                        regex: '/exposurereport/',
                        value: 'Y'
                  },{
                        regex: '/healthyhomes/',
                        value: 'Y'
                  },{
                        regex: '/healthyplaces/',
                        value: 'Y'
                  },{
                        regex: '/labstandards/',
                        value: 'Y'
                  },{
                        regex: '/mold/',
                        value: 'Y'
                  },{
                        regex: '/nbslabbulletin/',
                        value: 'Y'
                  }]
            },
		Spanish: {
                  source: 'url',
                  patterns: [{
                        regex: '/spanish/',
                        value: 'Y'
                  }]
            },
		MMWR: {
                  source: 'url',
                  patterns: [{
                        regex: '/mmwr/',
                        value: 'Y'
                  }]
            },
		BirthDefects: {
                  source: 'url',
                  patterns: [{
                        regex: '/ncbddd/',
                        value: 'Y'
                  },{
                        regex: '/parents/',
                        value: 'Y'
                  },{
                        regex: '/preconception/',
                        value: 'Y'
                  },{
                        regex: '/pregnancy/',
                        value: 'Y'
                  }]
            },
		NIOSH: {
                  source: 'url',
                  patterns: [{
                        regex: '/niosh/',
                        value: 'Y'
                  }]
            },
		OPHPR: {
                  source: 'url',
                  patterns: [{
                        regex: '/phpr/',
                        value: 'Y'
                  }]
            },
		OCOO: {
                  source: 'url',
                  patterns: [{
                        regex: '/employment/',
                        value: 'Y'
                  },{
                        regex: '/about/ethics/',
                        value: 'Y'
                  },{
                        regex: '/fmo',
                        value: 'Y'
                  },{
                        regex: '/od/ocio/',
                        value: 'Y'
                  },{
                        regex: '/od/pgo/funding/grants/',
                        value: 'Y'
                  },{
                        regex: '/od/pgo/funding/contracts/',
                        value: 'Y'
                  },{
                        regex: '/biosafety/',
                        value: 'Y'
                  },{
                        regex: '/maso/',
                        value: 'Y'
                  },{
                        regex: '/maso/facm/',
                        value: 'Y'
                  },{
                        regex: '/od/foia',
                        value: 'Y'
                  },{
                        regex: '/sustainability',
                        value: 'Y'
                  },{
                        regex: 'www2a.cdc.gov/od/foiastatus/',
                        value: 'Y'
                  }]
            },
		MISO: {
                  source: 'url',
                  patterns: [{
                        regex: '/policy/',
                        value: 'Y'
                  },{
                        regex: '/washington/',
                        value: 'Y'
                  },{
                        regex: '/biosafety/',
                        value: 'Y'
                  },{
                        regex: '/diversity/',
                        value: 'Y'
                  },{
                        regex: '/od/eaipp/',
                        value: 'Y'
                  },{
                        regex: '/eval/',
                        value: 'Y'
                  },{
                        regex: '/family/',
                        value: 'Y'
                  },{
                        regex: '/od/foia',
                        value: 'Y'
                  },{
                        regex: '/evaluation/',
                        value: 'Y'
                  },{
                        regex: '/men/',
                        value: 'Y'
                  },{
                        regex: '/program/',
                        value: 'Y'
                  },{
                        regex: '/od/science',
                        value: 'Y'
                  },{
                        regex: '/od/ocio/',
                        value: 'Y'
                  },{
                        regex: '/sustainability',
                        value: 'Y'
                  },{
                        regex: '/women/',
                        value: 'Y'
                  },{
                        regex: 'www2a.cdc.gov/od/foiastatus/',
                        value: 'Y'
                  }]
            }
    },

   mode: 'first-party'
};
