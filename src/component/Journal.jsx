/* eslint-disable quotes */
import React, { PureComponent } from 'react';
import List from './List';
import Introduce from './Introduce';

export default class View extends PureComponent {
    getParam(key) {
        const re = new RegExp(`[?&]${key}=([^&#]+)`, 'i');
        const value = window.location.href.match(re);
        return value && value[1] ? value[1] : null;
    }
    selectComponent(key, data) {
        switch (key) {
            case ('introduce'): 
                return <Introduce data={data} key={key}/>;
            default: 
                break;
        }
        return null;
    }
    getData(page, journal) {
        switch(page) {
            case('ethics'):
                return this.props.ethics;
            case('authorGuide'):
                return this.props.authorGuide;
            case('editorial'):
                return this.props.editorial[journal];
            case('introduce'):
                return this.props.introduce[journal];
            case('articleFees'):
                return this.props.articleFees;
            default: break;
        }
        return null;
    }
    render() {
        let journal = this.getParam('journal');
        let page = this.getParam('page');
        if (!journal || !page) {
            journal = 'JPME';
            page = 'introduce';
        }
        const data = this.getData(page, journal);
        const showComponent = <Introduce data={data} page={page} journal={journal}/>;
        const pathMap = [
            {
                name: 'About This Journal',
                index: `/journal?journal=${journal}&page=introduce`,
            },
            {
                name: 'Editorial Borad',
                index: `/journal?journal=${journal}&page=editorial`,
            },
            {
                name: 'Author Guidelines',
                index: `/journal?journal=${journal}&page=authorGuide`,
            },
            {
                name: 'Publication Ethics',
                index: `/journal?journal=${journal}&page=ethics`,
            },
            {
                name: 'Current Issues',
                index: `/journal?journal=${journal}&page=currentIssue`,
            },
            {
                name: 'Archive',
                index: `/journal?journal=${journal}&page=archive`,
            },
            {
                name: 'Article Processing Fees',
                index: `/journal?journal=${journal}&page=articleFees`,
            },
        ];
        return (
            <div style={{
                display: 'flex',
            }}>
                <div className='left'>
                    <List pathMap={pathMap} push={this.props.history.push}/>
                </div>
                <div className='journalRight'>
                    {showComponent}
                </div>

            </div>
        );
    }
}

View.defaultProps = {
    introduce: {
        JPME: [
            {
                title: 'About This Journal',
                p: [
                    'Journal of Petroleum and Mining Engineering (JPME) is an internationally peer reviewed, open access journal that publishes manuscripts under all aspects of petroleum and gas engineering studies , Mining Engineering, Safety Technology and Engineering, Mineral Processing, Coalfield Geology, Geotechnical Engineering.',
                    'Papers submitted in this journal must be original, and of a quality that would be of interest to an international readership. Manuscripts submitted to this journal are subject to a peer review process, which involves an international panel of researchers who are expert in relevant fields. It also publishes book reviews of potential interest to readers. The journal is published in both print and online versions. The online version of the journal is free access and downloads.',
                ],
                name: 'Journal of Research in Vocational Education (JRVE)',
            },
        ],
        JRSE: [
            {
                title: 'About This Journal',
                p: [
                    'Journal of Research in Science and Engineering (JRSE) is a peer-reviewed, monthly, online international refereed journal, which publishes original articles, research articles, review articles with top-level work from all areas of Engineering Research and their application including Mechanical, Civil, Electrical, Chemical, Electronics, Mathematics and Geological etc. Researchers in all technology and engineering fields are encouraged to contribute articles based on recent research. Journal publishes research articles and reviews within the whole field of Engineering Research, and it will continue to provide information on the latest trends and developments in this ever-expanding subject.',
                    'Online Engineering is the future trend in engineering and science. This journal covers almost all disciplines of engineering and applied sciences. ',
                    'Researchers and students of M.S., M.Phil and PhD are requested to send their original research articles to JRSE.',
                ],
                name: 'Journal of Progress in Civil Engineering (JPCE)',
            },
        ],
        JRVE: [
            {
                title: "About This Journal",
                p: [
                    "Journal of Research in Vocational Education (JRVE) is a new academic journal in the field of Vocational Education and Training (VET). It publishes empirical work in all fields of VET from basic VET to continuous or adult learning. ",
                    "Works appropriate for publication in JRVE include theoretical syntheses, conceptual models, position papers, literature reviews, and empirical research papers using quantitative or qualitative methods, or both.",
                ],
                name: 'Journal of Petroleum and Mining Engineering (JPME)',
            },
        ],
        JMME: [
            {
                title: 'About This Journal',
                p: [
                    "Journal of Metallurgy and Materials Engineering (JMME) is a new academic journal in the field of Metallurgy and mining industry . Aims and goals of our project are the exchange of theoretical and empirical researches in the field of metallurgy and ore mining industry. The journal represents a unique collection of scientific articles, detailed overview of equipment and production processes, presentation of the latest advances in the field of information technologies, materials science, engineering pedagogics, economy, etc.",
                    "The main audience of the journal is represented by scientists of all spheres which belong to metallurgical and ore mining industry, heads of iron and steel enterprises, graduates and students, metal traders.",
                ],
                name: 'Journal of Contemporary Medical Practice (JCMP)',
            },
        ],
        JGEBF: [
            {
                title: 'About This Journal',
                p: [
                    "Journal of Global Economy, Business and Finance (JGEBF) is open access, peer-reviewed journal whose objectives is to publish original research papers related to the global economy, business and finance issues. This journal is also dedicated to disseminating the published articles freely for international academicians, researchers, practitioners, regulators, and public societies.",
                    "The journal welcomes author from any institutional backgrounds and accepts rigorous empirical research paper with any methods or approach that is relevant to the global economy, business and finance context or content, as long as the research fits one of three salient disciplines: economics, business, or accounting.",
                ],
                name: 'Journal of Research in Science and Engineering (JRSE)',
            },
        ],
        JPCE: [
            {
                title: 'About This Journal',
                p: [
                    "Journal of Progress in Civil Engineering (JPCE), which is a part of Recent Science Journals provides a wide range of the highly technological, original, creative and quality publications covering a broad area of research activities in the Civil and Environmental Engineering sciences. It makes the exchange of scientific and practical knowledge; and information among technology professionals.",
                    "Journal of Progress in Civil Engineering (JPCE) is a peer-reviewed, open access journal that publishes original research articles such as review articles, full-length papers, and short communications of original research work. The journal is seeking to provide a platform for engineers and academicians all over the world to promote, share, and discuss various new issues in civil and environmental fields. The journal includes a wide range of fields in its discipline to create a platform for the authors to make their contribution towards the journal and the editorial office promises a peer review process for the submitted manuscripts for the quality of publishing.",
                    "Researchers and students of M.S., M.Phil and PhD are requested to send their original research articles to JPCE.",
                ],
                name: 'Journal of Educational Research and Policies (JERP)',
            },
        ],
        JCMP: [
            {
                title: 'About This Journal',
                p: [
                    "Journal of Contemporary Medical Practice (JCMP) is an initiative to encourage researchers, clinicians and individuals to share research advances the field of addiction medicine. The Journal of Contemporary Medical Practice is a unique platform that publishes current findings in science and medicine and promotes health and wellness. The editorial board of JCMP is a committed team of experts that ensures quality publishing of complete and reliable sources of information on discoveries and current developments in the field of Contemporary Medical Practice.",
                    "It is a scientific, internationally refereed journal that publishes retrospective / prospective clinical and laboratory studies, interesting case presentations, invited collections, editorial letters, original images, short reports and surgical technical articles about every branch of medicine.",
                ],
                name: 'Journal of Metallurgy and Materials Engineering (JMME)',
            },
        ],
        JERP: [
            {
                title: 'About This Journal',
                p: [
                    "Journal of Educational Research and Policies (JERP) is a new academic journal in the field of Educational Research and Policies. Works appropriate for publication in JERP include theoretical syntheses, conceptual models, position papers, literature reviews, and empirical research papers using quantitative or qualitative methods, or both.",
                ],
                name: 'International Journal of Environment Research (IJER)',
            },
        ],
        IJER: [
            {
                title: 'About This Journal',
                p: [
                    'International Journal of Environment Research (IJER) is a peer-reviewed, scholarly journal that aims to systematically develop the minds of aspiring scholars who seek to contribute to the academic community. The focus of the journal is academic research in all fields of Environmental Sciences and Sustainable Development; it includes all topics related to energy, pollution, nature conservation, the effects of climate change, biodiversity and ecology, soil science, water resources, recycling and management, organic farming, forestry and integrated crop management, planning, landscape, and other topics related to the environment.',
                    'In accordance with the definition of open access journal, IJER is a model of the fully open journal that allows global open access to its content which is freely available without charge to users and institutions. They are allowed to read, download, copy, distribute, print, search, or link to the full texts of the articles, or use them for any other lawful purpose for non-commercial use, without asking prior permission from the publisher or the author.',
                ],
            },
        ],
        JES: [
            {
                title: 'About This Journal',
                p: [
                    "Journal of Energy Science (JES) is a peer-reviewed, Open Access journal that publishes original research articles as well as review articles relating to the science and technology of energy generation, distribution, storage, and management. It also publishes studies into the environmental, societal, and economic impacts of energy use and policy.",
                    "The journal welcomes articles relating to both renewable (biomass, hydropower, geothermal, solar, wind) and non-renewable energy (petroleum, natural gas, coal, nuclear), as well as energy use more generally.",
                    "As well as original research, the Journal of Energy Science (JES) also publishes focused review articles that examine the state of the art, identify emerging trends, and suggest future directions for developing fields.",
                ],
                name: 'Journal of Global Economy, Business and Finance (JGEBF)',
            },
        ],
        JSSH: [
            {
                title: 'About This Journal',
                p: [
                    "Journal of Social Science and Humanities (JSSH) is an international, peer-reviewed journal, correspondence in the fields of arts, commerce and social sciences. ",
                    "The aim of JSSH is to publishes Original research Articles, Short Communications, Review Articles in Linguistics, Commerce, Anthropology, Sociology, Geography, Economics, History, Environmental Studies, Business Administration, Home Science, Public Health, Political Science, Demography, Cultural Studies, Ethnography and Sociolinguistics.",
                    "All submitted articles should report original, previously unpublished research results, experimental or theoretical, and will be peer-reviewed. Articles submitted to the journal should meet these criteria and must not be under consideration for publication elsewhere. Manuscripts should follow the style of the journal and are subject to both review and editing.",
                ],
            },
        ],
        JAH: [
            {
                title: 'About This Journal',
                p: [
                    "Journal of Agriculture and Horticulture (JAH) is an open access international Journal which aims to publish high quality scientific articles in the field of Horticulture & Agriculture. Our aim is to give an open space to scientists who can publish and deliver scientific knowledge about the relevant field for the people in the society.",
                    "The scope of JAH includes medicinal plant research, growing of fruits and vegetables, garden crops, ornamental plants, plant protection and nutrition, genetic and breeding resources, storage technologies, agricultural economics, plant pathology, viticulture, and garden management. This Journal welcomes original articles from plant science researchers with new and improved technologies and innovations to support society in order to enhance quality and quantity of horticultural products.",
                    "Journal of Agriculture and Horticulture (JAH) is a peer-reviewed journal which intents to publish most recent discoveries and latest developments in the form of review articles, mini review articles, short communications, editorials and opinion articles in all areas of horticulture field. These materials are freely available online and can be accessed any where across the globe without any subscriptions.",
                ],
                name: 'Journal of Energy Science (JES)',
            },
        ],
    },
    editorial: {
        JPME: [
            {
                title: 'Editor-in-Chief',
                p: [
                    'Prof. Tomislav Malvić',
                ],
            },
            {
                title: 'Editors of sections',
                p: [
                    'Prof. Željko Andreić (Mathematics, Physics, Space Sciences)',
                    'Assist. Prof. Uroš Barudžija (Geology)',
                    'Prof. Gordan Bedeković (Mining), deputy Chief Editor',
                    'Assoc. Prof. Tomislav Kurevija (Petroleum Engineering, Energetics)',
                    'all editors come from University of Zagreb, Faculty of Mining, Geology and Petroleum Engineering, Croatia',
                ],
            },
            {
                title: 'Proofreaders',
                p: [
                    'Dr. Dubravka Pleše, University of Zagreb, Faculty of Mining, Geology and Petroleum Engineering, Croatia',
                    'Dr. Ivana Matas Ivanković, Institute for Croatian Language and Linguistics, Croatia',
                ],
            },
        ],
        JRSE: [
            {
                title: 'Editor-in-Chief',
                p: [
                    'Dr Taylor M. Matt',
                    'Department of Biological Science, University of Macquqrie , Sydney, Australia',
                ],
            },
            {
                title: 'Editors of sections',
                p: [
                    'Dr. Markus Haag',
                    'Department of Management and Business Systems, University of Bedfordshire, United Kingdom Professor Nathan N. Elekwa',
                    'Professor of Public Administration and Local Government, University of Nigeria, Nsuka, Nigeria',
                    'Dr. Vin vng	Visiting Professor,',
                    'Department of computer, University of Bedfordshire, United Kingdom',
                    'Dr. Stephen Mackson',
                    'Department of Management and Business Information Systems, University of Bedfordshire, UK',
                    'Dr. Make Smart',
                    'Faculty of Mathematics and Natural Science, University of Augsburg, Germany',
                ],
            },
            {
                title: 'Proofreaders',
                p: [
                    'Professor, Emmanuel I. Okoye	Accountancy Department, Nnamdi Azikiwe University, Awka, Nigeria',
                    'Dr. Matthew Peters	Department of computer Science, University of Western Sydney, Australia',
                ],
            },
        ],
        JRVE: [
            {
                title: "Editor-in-Chief",
                p: [
                    "Dr. Jasper Campbell",
                    'Faculty of Technology, Policy and Management Delft University of Technology',
                ],
            },
            {
                title: "Editors of sections",
                p: [
                    "Prof. M. Sultan Bhat",
                    "Professor and Head, Department of Geography and Regional Development, University of Kashmir",
                    "Dr. Benjamin Walker",
                    "Adjunct professor, College of Engineering, Montana State University",
                ],
            },
            {
                title: "Proofreaders",
                p: [
                    "Dr Anthony Butcher",
                    "Faculty of Electrical and Computer Engineering, University of Florida, USA",
                    "Dr. Maxwell Johnson",
                    "Canadian College of Health, Science, and Technology",
                    "Dr. Dan Vandive",
                    "Institute of Mechanical Engineers, Hong Kong",
                ],
            },
        ],
        JMME: [
            {
                title: "Editor-in-Chief",
                p: [
                    "Victoria Pravosudovichl",
                    "PhD, Senior Reseacher at Science and Research Section Kryvyi Rih National University, Kryvyi Rih, Ukraine",
                ],
            },
            {
                title: "Editors of sections",
                p: [
                    "Prof. Aleksander Sladkowski",
                    "Silesian University of Technology Gliwice, Poland",
                    "Dr. Michael Gasik",
                    "Dr.Sci.Tech., Dr. Tech. Professor, Aalto University Foundation, Finland",
                ],
            },
            {
                title: "Proofreaders",
                p: [
                    "Dr Aissa Ben Selhoub",
                    "PhD in Ecology and Environment Protection, Dnipropetrovsk State Agrarian and Economic University. Senior researcher at the Laboratory of Valorization of Mining Resources and Environment, Mining Department, Badji Mokhtar University, Annaba, Algeria.",
                    "Dr. Aleksandr Galkin",
                    "D.Sc. in engineering Senior researcher, professor, National Mineral Resources University, Saint-Petersburg, Russia",
                ],
            },
        ],
        JGEBF: [
            {
                title: "Editor-in-Chief",
                p: [
                    "Wuri Handayani, Ph.D",
                    "Faculty of Economics and Business, Universitas Gadjah Mada, Indonesia",
                ],
            },
            {
                title: "Editors of sections",
                p: [
                    "Sekar Utami Setiastuti",
                    "Ph.D., Faculty of Economics, and Business, Universitas Gadjah Mada, Indonesia",
                    "Deden Dinar Iskandar",
                    "Ph.D., Economics and Development Studies, Faculty of Economics and Business, Universitas Diponegoro, Indonesia",
                    "Eddy Junarsin, Ph.D.",
                    "Department of Management, Faculty of Economics and Business, Universitas Gadjah Mada, Indonesia",
                ],
            },
            {
                title: "Proofreaders",
                p: [
                    "Ignatius Roni Setyawan",
                    "Ph.D., Faculty of Economics, Universitas Tarumanegara, Indonesia",
                    "Whysnianti Basuki, Ph.D.",
                    "School of Business, Law, and Communication Solent University, United Kingdom",
                ],
            },
        ],
        JPCE: [
            {
                title: "Editor-in-Chief",
                p: [
                    "Dr Emilio Bilotta",
                    "Professor, Universita degli Studi di Napoli Frederico II Dipartimento di Ingegneria Idraulica, Geotecnica ed Ambientale, Italy",
                ],
            },
            {
                title: "Editors of sections",
                p: [
                    "Huriye Bilsel",
                    "Geotechnical Engineering, Department of Civil Engineering, Eastern Mediterranean University, Famagusta, North Cyprus",
                    "Mariacristina Bonini",
                    "Research Assistant and Consultant in Geotechnical Engineering, Politecnico di Torino, Italy",
                    "Edward Brylawski",
                    "President, GEONOR Instrumentation, Milford, Pennsylvania USA",
                    "Joseph A. Caliendo",
                    "Department of Civil and Environmental Engineering, Utah State University, Logan UT USA",
                    "Helder I. Chamin",
                    "Professor-Coordenador, Departamento de Engenharia Geotnica ISEP|IPP, Porto, Portugal",
                    "Dave H. Chan",
                    "Department of Civil Engineering, University of Alberta, Edmonton, Alberta, Canada",
                    "Deepankar Choudhury",
                    "Associate Professor, Department of Civil Engineering, Indian Institute of Technology (IIT) Bombay, Powai, Mumbai, India",
                ],
            },
            {
                title: "Proofreaders",
                p: [
                    "David Toll",
                    "Geotechnical Systems Group, School of Engineering, University of Durham, UK",
                    "John R. Williams",
                    "Director, Intelligent Engineering Systems Laboratory, Massachusetts Institute of Technology, Boston, Massachusetts, USA",
                ],
            },
        ],
        JCMP: [
            {
                title: "Editor-in-Chief",
                p: [
                    "Dr. Serkan TURSUN",
                    "Department of Pediatrics, School of Medicine, Kırıkkale University, Kırıkkale",
                ],
            },
            {
                title: "Editors of sections",
                p: [
                    "Prof. Harun AKAR",
                    "Department of Internal Medicine, Tepecik Training and Research Hospital, İzmir",
                    "Dr. Alpaslan TUZCU",
                    "Adjunct professor, Department of Endocrinology, School of Medicine, Dicle University, Diyarbakır",
                ],
            },
            {
                title: "Proofreaders",
                p: [
                    "Dr Fatih BATTAL",
                    "Department of Pediatrics, School of Medicine, Çanakkale 18 Mart University, Çanakkale",
                    "Dr. Meltem HENDEK",
                    "Department of Periodontology, School of Medicine, Kırıkkale University, Kırıkkale",
                    "Dr. Zaim JATIC",
                    "Department of Family Medicine, Sarajevo, BOSNIA-HERZEGOVINA",
                ],
            },
        ],
        JERP: [
            {
                title: "Editor-in-Chief",
                p: [
                    "Dr. Jasper Campbell",
                    "Faculty of Technology, Policy and Management Delft University of Technology",
                ],
            },
            {
                title: "Editors of sections",
                p: [
                    "Prof. M. Sultan Bhat",
                    "Professor and Head, Department of Geography and Regional Development, University of Kashmir",
                    "Dr. Benjamin Walker",
                    "Adjunct professor, College of Engineering, Montana State University",
                ],
            },
            {
                title: "Proofreaders",
                p: [
                    "Dr Anthony Butcher",
                    "Faculty of Electrical and Computer Engineering, University of Florida, USA",
                    "Dr. Maxwell Johnson",
                    "Canadian College of Health, Science, and Technology",
                    "Dr. Dan Vandive",
                    "Institute of Mechanical Engineers, Hong Kong",
                ],
            },
        ],
        IJER: [
            {
                title: "Editor-in-Chief",
                p: [
                    "Professor Anna Laura Pisello",
                    "Assistant Professor of Applied Physics at University of Perugia, Visiting scholar at Columbia University and City University of New York. Post-doc fellow, and Winner of four international academic awards, Professor in national summer courses for PhD students in Applied Physics, Professor in graduate master classes - University of Perugia, Research contributor, Virginia Tech University.",
                ],
            },
            {
                title: "Editors of sections",
                p: [
                    "Professor Youba Sokona , Switzerland",
                    "Professor Khairul Anuar bin Kassim , Malaysia",
                    "Professor Alberto Muscio , Italy",
                    "Professor Emmanuel Bozonnet , France",
                    "Professor Sofoklis Makridis , Greece",
                    "Professor Alessandro Di Graziano , Italy",
                    "Professor Hasim Altan , United Arab Emirates",
                    "Professor Crescenzo Petrone , Italy",
                    "Professor Dinko Vukadinović , Croatia",
                    "Professor Lucia Della Spina , Italy",
                    "Dr Cristina Piselli , University of Perugia , Italy ",
                ],
            },
            {
                title: "Proofreaders",
                p: [
                    "Professor Lucia Della Spina , Italy",
                    "Professor Fabio Naselli , Italy",
                    "Professor Mahmoud Ghoneem , Egypt",
                ],
            },
        ],
        JES: [
            {
                title: "Editor-in-Chief",
                p: [
                    "Naim H. Afgan, Intituto Superiro Tecnico, Portugal",
                ],
            },
            {
                title: "Editors of sections",
                p: [
                    "Soteris Kalogirou, Cyprus University of Technology, Cyprus",
                    "Tamas Kerekes, Aalborg University, Denmark",
                    "Theodosios P. Korakianitis, Saint Louis University, USA",
                    "David Kubicka, Technopark Kralupy University of Chemistry and Technology Prague, Czech Republic",
                    "Francesco Lufrano, Consiglio Nazionale delle Ricerche, Italy",
                    "Viviana C. Mariani, Pontifical Catholic University of Paraná, Brazil",
                    "Alessandro Mauro, University of Napoli Parthenope, Italy",
                    "Antonio Messineo, Università Kore di Enna, Italy",
                ],
            },
            {
                title: "Proofreaders",
                p: [
                    "S Venkata Mohan, CSIR Indian Institute of Chemical Technology, India",
                    "Maurizio Volpe, Università degli Studi di Trento, Italy",
                ],
            },
        ],
        JSSH: [
            {
                title: "Editor-in-Chief",
                p: [
                    "Prof. Madya Dr Novel a/k Lyndon",
                    "Faculty of Social Sciences and Humanities Universiti Kebangsaan Mal",
                ],
            },
            {
                title: "Editors of sections",
                p: [
                    "Prof. Madya Dr Abd Hair Awang",
                    "School of Social, Development & Environmental Studies Faculty of Social Sciences and Humanities Universiti Kebangsaan Malaysir",
                    "Assoc. Prof. Dr. Rahim Aman",
                    "Pusat Pengajian Bahasa, Kesusasteraan dan Kebudayaan Melayu Universiti Kebangsaan Malaysia, Malaysia",
                ],
            },
            {
                title: "Proofreaders",
                p: [
                    "Ms Noviatin Binti Syarifuddin",
                    "National University of Malaysia, Bangi, Malaysia",
                    "Assoc Prof JALALUDDIN ABDUL MALEK",
                    "Universiti Kebangsaan Malaysia, MalaysiaDr. Dan Vandive",
                ],
            },
        ],
        JAH: [
            {
                title: "Editor-in-Chief",
                p: [
                    "Ratikanta Ghosh",
                    "Bidhan Chandra Krishi Viswavidyalaya , India",
                ],
            },
            {
                title: "Editors of sections",
                p: [
                    "Joseph J. Molnar ",
                    "Auburn University, USA",
                    "Hosam O. Elansary",
                    "Alexandria University, Egypt",
                    "Karim Sorkheh ",
                    "Daffodil International University (DIU), Bangladesh",
                    "Kalyan Chakraborti",
                    "Bidhan Chandra Krishi Viswavidyalaya , India",
                ],
            },
            {
                title: "Proofreaders",
                p: [
                    "Majid Abdoli",
                    "Islamic Azad University, Iran",
                    "Jiban Shrestha",
                    "Coordinator at National Commercial Agriculture Research Program, Nepal",
                ],
            },
        ],
    },
    authorGuide: [
        {
            title: 'Manuscript Preparation',
            p: [
                'All manuscripts should be written in English and organized in one column format.',
                'All the following elements must be included:',
                [
                    'Title',
                    'Author names',
                    'Author organizations',
                    'E-mail of corresponding author',
                    'Abstract',
                    'Keywords',
                    'References',
                ],
                'For MS-Word template, please click here.',
                'For Latex template, please click here.',
            ],
        },
        {
            title: 'Submission',
            p: [
                'Each manuscript should be submitted by one of its authors through the manuscript tracking system. However, if you have difficulties in accessing the manuscript tracking system, e-mail submissions to JPME@ centuryscipub.org are also accepted.',
            ],
        },
        {
            title: 'Peer Review',
            p: [
                'All manuscripts are subject to anonymous peer review. Revisions may be required if a manuscript does not meet standards of academic excellence. The final decision of acceptance must be confirmed by the editors-in-chief.',
            ],
        },
        {
            title: 'Publication',
            p: [
                'The following procedures must be finished before a manuscript goes to its final stage of publication.',
                [
                    'Prepare and submit the finalized paper through the manuscript tracking system.',
                    'Sign the copyright form.',
                    'Pay Article Processing Fees',
                ],
                'After typesetting and proof reading, further proofs will be sent to the author(s) before it is finally published.',
            ],
        },
    ],
    ethics: [
        {
            title: 'Review and Publication',
            p: [
                'All submitted papers are subject to strict peer-review process by at least two international reviewers that are experts in the area of the particular paper. The factors that are taken into account in review are relevance, soundness, significance, originality, readability and language. The possible decisions include acceptance, revision, or rejection. There is no guarantee that a revised and re-submitted manuscript will be accepted. The paper acceptance is constrained by such legal requirements as shall then be in force regarding libel, copyright infringement and plagiarism.',
            ],
        },
        {
            title: 'Authors',
            p: [
                'Authors must certify that the manuscript',
                [
                    'is their original work.',
                    'has not previously been published elsewhere.',
                    'is not currently being considered for publication elsewhere.',
                ],
                'All Authors mentioned in the paper must have significantly contributed to the research. Authors must state that all data in the paper are real and authentic, and must identify all sources used in the creation of their manuscript. Also, authors are obliged to provide retractions or corrections of mistakes.',
                "The submitting author is responsible for ensuring that the article's publication has been approved by all the other coauthors. It is also the authors' responsibility to ensure that the articles emanating from a particular institution are submitted with the approval of the necessary institution. Authors must notify the editors of any conflicts of interest, and must also report any errors they discover in their published paper to the editors. By submitting a paper the author understands and agrees that its copyright is transferred to Isaac Scientific Publishing.",
            ],
        },
        {
            title: 'Reviewers',
            p: [
                'Reviewers should keep all information regarding papers confidential and treat them as privileged information. Reviews should be conducted objectively, with no personal criticism of the author, and reviewers should not review manuscripts in which they have conflicts of interest resulting from competitive, collaborative, or other relationships or connections with any of the authors, companies, or institutions connected to the papers.',
                "Reviewers should express their views clearly with supporting arguments, and should identify relevant published work that has not been cited by the authors. Reviewers should also call to the editor's attention any substantial similarity or overlap between the manuscript under review and any other published paper.",
            ],
        },
        {
            title: 'Editors',
            p: [
                'Editors are responsible for the contents and overall quality of the publication. They have complete responsibility and authority to reject/accept an article and should guarantee the quality of the papers and the integrity of the academic record. Editors should only accept a paper when reasonably certain, and should not reverse their decisions nor overturn the ones of previous editors without serious reason. Editors should publish errata pages or make corrections when needed.',
                "Editors should base their decisions solely on the papers' importance, originality, clarity and relevance to publication's scope. Editors should preserve the anonymity of reviewers, and should not allow any conflicts of interest between staff, authors, reviewers and board members.",
                "Editors should have a clear picture of a research's funding sources, and should ensure that all research material they publish conforms to internationally accept ethical guidelines. Editors should act if they suspect misconduct, whether a paper is published or unpublished, and make all reasonable attempts to persist in obtaining a resolution to the problem, however, editors should not reject papers based on suspicions, they should have proof of misconduct.",
            ],
        },
        {
            title: 'Article Processing Fees',
            p: [
                "In an open access model, the publication costs of an article are paid from an author's research budget, or by their supporting institution, in the form of Article Processing Charges. These Article Processing Charges replace subscription charges and allow publishers to make the full-text of every published article freely available to all interested readers.",
                "Publishing an article in Frontiers in Management Research requires Article Processing Charges that will be billed to the submitting author following the acceptance of an article for publication. Apart from these Article Process Charges, there are no charges for submission and paper review. The fees to be paid following the acceptance of an article are $199. ",
            ],
        },
    ],
    articleFees: [
        {
            title: "",
            p: [
                'Bryan House Publishing Limited is entirely not-for-profit, so the article processing charge (APC) is free, and there are no article submission charges, page charges, or color charges.',
            ],
        },
    ],
    // JPME: {
    //     introduce:[
    //         {
    //             title: 'About This Journal',
    //             p: [
    //                 'Journal of Petroleum and Mining Engineering (JPME) is an internationally peer reviewed, open access journal that publishes manuscripts under all aspects of petroleum and gas engineering studies , Mining Engineering, Safety Technology and Engineering, Mineral Processing, Coalfield Geology, Geotechnical Engineering.',
    //                 'Papers submitted in this journal must be original, and of a quality that would be of interest to an international readership. Manuscripts submitted to this journal are subject to a peer review process, which involves an international panel of researchers who are expert in relevant fields. It also publishes book reviews of potential interest to readers. The journal is published in both print and online versions. The online version of the journal is free access and downloads.',
    //             ],
    //         },
    //     ],
    //     editorial: [
    //         {
    //             title: 'Editor-in-Chief',
    //             p: [
    //                 'Prof. Tomislav Malvić',
    //             ],
    //         },
    //         {
    //             title: 'Editors of sections',
    //             p: [
    //                 'Prof. Željko Andreić (Mathematics, Physics, Space Sciences)',
    //                 'Assist. Prof. Uroš Barudžija (Geology)',
    //                 'Prof. Gordan Bedeković (Mining), deputy Chief Editor',
    //                 'Assoc. Prof. Tomislav Kurevija (Petroleum Engineering, Energetics)',
    //                 'all editors come from University of Zagreb, Faculty of Mining, Geology and Petroleum Engineering, Croatia',
    //             ],
    //         },
    //         {
    //             title: 'Proofreaders',
    //             p: [
    //                 'Dr. Dubravka Pleše, University of Zagreb, Faculty of Mining, Geology and Petroleum Engineering, Croatia',
    //                 'Dr. Ivana Matas Ivanković, Institute for Croatian Language and Linguistics, Croatia',
    //             ],
    //         },
    //     ],
    //     authorGuide: [
    //         {
    //             title: 'Manuscript Preparation',
    //             p: [
    //                 'All manuscripts should be written in English and organized in one column format.',
    //                 'All the following elements must be included:',
    //                 [
    //                     'Title',
    //                     'Author names',
    //                     'Author organizations',
    //                     'E-mail of corresponding author',
    //                     'Abstract',
    //                     'Keywords',
    //                     'References',
    //                 ],
    //                 'For MS-Word template, please click here.',
    //                 'For Latex template, please click here.',
    //             ],
    //         },
    //         {
    //             title: 'Submission',
    //             p: [
    //                 'Each manuscript should be submitted by one of its authors through the manuscript tracking system. However, if you have difficulties in accessing the manuscript tracking system, e-mail submissions to JPME@ centuryscipub.org are also accepted.',
    //             ],
    //         },
    //         {
    //             title: 'Peer Review',
    //             p: [
    //                 'All manuscripts are subject to anonymous peer review. Revisions may be required if a manuscript does not meet standards of academic excellence. The final decision of acceptance must be confirmed by the editors-in-chief.',
    //             ],
    //         },
    //         {
    //             title: 'Publication',
    //             p: [
    //                 'The following procedures must be finished before a manuscript goes to its final stage of publication.',
    //                 [
    //                     'Prepare and submit the finalized paper through the manuscript tracking system.',
    //                     'Sign the copyright form.',
    //                     'Pay Article Processing Fees',
    //                 ],
    //                 'After typesetting and proof reading, further proofs will be sent to the author(s) before it is finally published.',
    //             ],
    //         },
    //     ],
    //     ethics: [
    //         {
    //             title: 'Review and Publication',
    //             p: [
    //                 'All submitted papers are subject to strict peer-review process by at least two international reviewers that are experts in the area of the particular paper. The factors that are taken into account in review are relevance, soundness, significance, originality, readability and language. The possible decisions include acceptance, revision, or rejection. There is no guarantee that a revised and re-submitted manuscript will be accepted. The paper acceptance is constrained by such legal requirements as shall then be in force regarding libel, copyright infringement and plagiarism.',
    //             ],
    //         },
    //         {
    //             title: 'Authors',
    //             p: [
    //                 'Authors must certify that the manuscript',
    //                 [
    //                     'is their original work.',
    //                     'has not previously been published elsewhere.',
    //                     'is not currently being considered for publication elsewhere.',
    //                 ],
    //                 'All Authors mentioned in the paper must have significantly contributed to the research. Authors must state that all data in the paper are real and authentic, and must identify all sources used in the creation of their manuscript. Also, authors are obliged to provide retractions or corrections of mistakes.',
    //                 "The submitting author is responsible for ensuring that the article's publication has been approved by all the other coauthors. It is also the authors' responsibility to ensure that the articles emanating from a particular institution are submitted with the approval of the necessary institution. Authors must notify the editors of any conflicts of interest, and must also report any errors they discover in their published paper to the editors. By submitting a paper the author understands and agrees that its copyright is transferred to Isaac Scientific Publishing.",
    //             ],
    //         },
    //         {
    //             title: 'Reviewers',
    //             p: [
    //                 'Reviewers should keep all information regarding papers confidential and treat them as privileged information. Reviews should be conducted objectively, with no personal criticism of the author, and reviewers should not review manuscripts in which they have conflicts of interest resulting from competitive, collaborative, or other relationships or connections with any of the authors, companies, or institutions connected to the papers.',
    //                 "Reviewers should express their views clearly with supporting arguments, and should identify relevant published work that has not been cited by the authors. Reviewers should also call to the editor's attention any substantial similarity or overlap between the manuscript under review and any other published paper."
    //             ],
    //         },
    //         {
    //             title: 'Editors',
    //             p: [
    //                 'Editors are responsible for the contents and overall quality of the publication. They have complete responsibility and authority to reject/accept an article and should guarantee the quality of the papers and the integrity of the academic record. Editors should only accept a paper when reasonably certain, and should not reverse their decisions nor overturn the ones of previous editors without serious reason. Editors should publish errata pages or make corrections when needed.',
    //                 "Editors should base their decisions solely on the papers' importance, originality, clarity and relevance to publication's scope. Editors should preserve the anonymity of reviewers, and should not allow any conflicts of interest between staff, authors, reviewers and board members.",
    //                 "Editors should have a clear picture of a research's funding sources, and should ensure that all research material they publish conforms to internationally accept ethical guidelines. Editors should act if they suspect misconduct, whether a paper is published or unpublished, and make all reasonable attempts to persist in obtaining a resolution to the problem, however, editors should not reject papers based on suspicions, they should have proof of misconduct.",
    //             ],
    //         },
    //         {
    //             title: 'Article Processing Fees',
    //             p: [
    //                 "In an open access model, the publication costs of an article are paid from an author's research budget, or by their supporting institution, in the form of Article Processing Charges. These Article Processing Charges replace subscription charges and allow publishers to make the full-text of every published article freely available to all interested readers.",
    //                 "Publishing an article in Frontiers in Management Research requires Article Processing Charges that will be billed to the submitting author following the acceptance of an article for publication. Apart from these Article Process Charges, there are no charges for submission and paper review. The fees to be paid following the acceptance of an article are $199. ",
    //             ],
    //         },
    //     ],
    // },
    // JRSE: {
    //     introduce: [
    //         {
    //             title: 'Introduction',
    //             p: [
    //                 'Journal of Research in Science and Engineering (JRSE) is a peer-reviewed, monthly, online international refereed journal, which publishes original articles, research articles, review articles with top-level work from all areas of Engineering Research and their application including Mechanical, Civil, Electrical, Chemical, Electronics, Mathematics and Geological etc. Researchers in all technology and engineering fields are encouraged to contribute articles based on recent research. Journal publishes research articles and reviews within the whole field of Engineering Research, and it will continue to provide information on the latest trends and developments in this ever-expanding subject.',
    //                 'Online Engineering is the future trend in engineering and science. This journal covers almost all disciplines of engineering and applied sciences. ',
    //                 'Researchers and students of M.S., M.Phil and PhD are requested to send their original research articles to JRSE.',
    //             ],
    //         },
    //     ],
    //     editorial: [
    //         {
    //             title: 'Editor-in-Chief',
    //             p: [
    //                 'Dr Taylor M. Matt',
    //                 'Department of Biological Science, University of Macquqrie , Sydney, Australia',
    //             ],
    //         },
    //         {
    //             title: 'Editors of sections',
    //             p: [
    //                 'Dr. Markus Haag',
    //                 'Department of Management and Business Systems, University of Bedfordshire, United Kingdom Professor Nathan N. Elekwa',
    //                 'Professor of Public Administration and Local Government, University of Nigeria, Nsuka, Nigeria',
    //                 'Dr. Vin vng	Visiting Professor,',
    //                 'Department of computer, University of Bedfordshire, United Kingdom',
    //                 'Dr. Stephen Mackson',
    //                 'Department of Management and Business Information Systems, University of Bedfordshire, UK',
    //                 'Dr. Make Smart',
    //                 'Faculty of Mathematics and Natural Science, University of Augsburg, Germany',
    //             ],
    //         },
    //         {
    //             title: 'Proofreaders',
    //             p: [
    //                 'Professor, Emmanuel I. Okoye	Accountancy Department, Nnamdi Azikiwe University, Awka, Nigeria',
    //                 'Dr. Matthew Peters	Department of computer Science, University of Western Sydney, Australia',
    //             ],
    //         },
    //     ],
    //     authorGuide: [
    //         {
    //             title: 'Manuscript Preparation',
    //             p:[
    //                 'All manuscripts should be written in English and organized in one column format.',
    //                 'All the following elements must be included:',
    //                 [
    //                     'Title',
    //                     'Author names',
    //                     'Author organizations',
    //                     'E-mail of corresponding author',
    //                     'Abstract',
    //                     'Keywords',
    //                     'References',
    //                 ],
    //                 'For MS-Word template, please click here.',
    //                 'For Latex template, please click here.',
    //             ],
    //         },
    //         {
    //             title: 'Submission',
    //             p: [
    //                 'Each manuscript should be submitted by one of its authors through the manuscript tracking system. However, if you have difficulties in accessing the manuscript tracking system, e-mail submissions to JRSE@centuryscipub.org are also accepted.',
    //             ],
    //         },
    //         {
    //             title: 'Peer Review',
    //             p: [
    //                 'All manuscripts are subject to anonymous peer review. Revisions may be required if a manuscript does not meet standards of academic excellence. The final decision of acceptance must be confirmed by the editors-in-chief.',
    //             ],
    //         },
    //         {
    //             title: 'Publication',
    //             p: [
    //                 'The following procedures must be finished before a manuscript goes to its final stage of publication.',
    //                 [
    //                     'Prepare and submit the finalized paper through the manuscript tracking system.',
    //                     'Sign the copyright form.',
    //                     'Pay Article Processing Fees.',
    //                 ],
    //                 'After typesetting and proof reading, further proofs will be sent to the author(s) before it is finally published.',
    //             ],
    //         },
    //     ],
    //     ethics: [
    //         {
    //             title: 'Review and Publication',
    //             p: [
    //                 'All submitted papers are subject to strict peer-review process by at least two international reviewers that are experts in the area of the particular paper. The factors that are taken into account in review are relevance, soundness, significance, originality, readability and language. The possible decisions include acceptance, revision, or rejection. There is no guarantee that a revised and re-submitted manuscript will be accepted. The paper acceptance is constrained by such legal requirements as shall then be in force regarding libel, copyright infringement and plagiarism.',
    //             ],
    //         },
    //         {
    //             title: 'Authors',
    //             p: [
    //                 'Authors must certify that the manuscript',
    //                 [
    //                     'is their original work.',
    //                     'has not previously been published elsewhere.',
    //                     'is not currently being considered for publication elsewhere.',
    //                 ],
    //                 'All Authors mentioned in the paper must have significantly contributed to the research. Authors must state that all data in the paper are real and authentic, and must identify all sources used in the creation of their manuscript. Also, authors are obliged to provide retractions or corrections of mistakes.',
    //                 "The submitting author is responsible for ensuring that the article's publication has been approved by all the other coauthors. It is also the authors' responsibility to ensure that the articles emanating from a particular institution are submitted with the approval of the necessary institution. Authors must notify the editors of any conflicts of interest, and must also report any errors they discover in their published paper to the editors. By submitting a paper the author understands and agrees that its copyright is transferred to Isaac Scientific Publishing.",
    //             ],
    //         },
    //         {
    //             title: 'Reviewers',
    //             p: [
    //                 'Reviewers should keep all information regarding papers confidential and treat them as privileged information. Reviews should be conducted objectively, with no personal criticism of the author, and reviewers should not review manuscripts in which they have conflicts of interest resulting from competitive, collaborative, or other relationships or connections with any of the authors, companies, or institutions connected to the papers.',
    //                 "Reviewers should express their views clearly with supporting arguments, and should identify relevant published work that has not been cited by the authors. Reviewers should also call to the editor's attention any substantial similarity or overlap between the manuscript under review and any other published paper.",
    //             ],
    //         },
    //         {
    //             title: 'Editors',
    //             p: [
    //                 "Editors are responsible for the contents and overall quality of the publication. They have complete responsibility and authority to reject/accept an article and should guarantee the quality of the papers and the integrity of the academic record. Editors should only accept a paper when reasonably certain, and should not reverse their decisions nor overturn the ones of previous editors without serious reason. Editors should publish errata pages or make corrections when needed.",
    //                 "Editors should base their decisions solely on the papers' importance, originality, clarity and relevance to publication's scope. Editors should preserve the anonymity of reviewers, and should not allow any conflicts of interest between staff, authors, reviewers and board members.Editors should have a clear picture of a research's funding sources, and should ensure that all research material they publish conforms to internationally accept ethical guidelines. Editors should act if they suspect misconduct, whether a paper is published or unpublished, and make all reasonable attempts to persist in obtaining a resolution to the problem, however, editors should not reject papers based on suspicions, they should have proof of misconduct.",
    //             ],
    //         },
    //         {
    //             title: 'Article Processing Fees',
    //             p: [
    //                 "In an open access model, the publication costs of an article are paid from an author's research budget, or by their supporting institution, in the form of Article Processing Charges. These Article Processing Charges replace subscription charges and allow publishers to make the full-text of every published article freely available to all interested readers.",
    //                 "Publishing an article in Frontiers in Management Research requires Article Processing Charges that will be billed to the submitting author following the acceptance of an article for publication. Apart from these Article Process Charges, there are no charges for submission and paper review. The fees to be paid following the acceptance of an article are $199. ",
    //             ],
    //         },
    //     ],
    // },
    // JRVE: {
    //     introduce: [
    //         {
    //             title: "Introduction",
    //             p: [
    //                 "Journal of Research in Vocational Education (JRVE) is a new academic journal in the field of Vocational Education and Training (VET). It publishes empirical work in all fields of VET from basic VET to continuous or adult learning. ",
    //                 "Works appropriate for publication in JRVE include theoretical syntheses, conceptual models, position papers, literature reviews, and empirical research papers using quantitative or qualitative methods, or both.",
    //             ],
    //         },
    //     ],
    //     editorial: [
    //         {
    //             title: "Editor-in-Chief",
    //             p: [
    //                 "Dr. Jasper Campbell",
    //                 'Faculty of Technology, Policy and Management Delft University of Technology',
    //             ],
    //         },
    //         {
    //             title: "Editors of sections",
    //             p: [
    //                 "Prof. M. Sultan Bhat",
    //                 "Professor and Head, Department of Geography and Regional Development, University of Kashmir",
    //                 "Dr. Benjamin Walker",
    //                 "Adjunct professor, College of Engineering, Montana State University",
    //             ],
    //         },
    //         {
    //             title: "Proofreaders",
    //             p: [
    //                 "Dr Anthony Butcher",
    //                 "Faculty of Electrical and Computer Engineering, University of Florida, USA",
    //                 "Dr. Maxwell Johnson",
    //                 "Canadian College of Health, Science, and Technology",
    //                 "Dr. Dan Vandive",
    //                 "Institute of Mechanical Engineers, Hong Kong",
    //             ],
    //         },
    //     ],
    // },
};