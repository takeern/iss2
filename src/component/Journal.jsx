/* eslint-disable quotes */
import React, { PureComponent } from 'react';
import List from './List';
import Introduce from './Introduce';

export default class View extends PureComponent {
    getParam(key) {
        const re = new RegExp(`[?&]${key}=([^&#]+)`, 'i');
        const value =  window.location.href.match(re);
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
        const showComponent = <Introduce data={data} key={page}/>;
        const pathMap = [
            {
                name: 'Introduction',
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
        ];
        return (
            <div style={{
                display: 'flex',
            }}>
                <div className='left'>
                    <h4>Browser by journal</h4>
                    <List pathMap={pathMap} push={this.props.history.push}/>
                    <h4>Contact Us</h4>
                    <ul
                    className='ul-path-warpper'
                    >
                        <li><span className='san' /> <a href='mailto:isaacpublishing@gmail.com' 
                        style={{    
                            textDecoration: 'none',
                            color: 'black', 
                            fontWeight: 400 }}
                        >Email: isaacpublishing@gmail.com</a></li>
                        <li><span className='san' /> QQ: 123456789</li>
                    </ul>
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
                title: 'Introduction',
                p: [
                    'Journal of Petroleum and Mining Engineering (JPME) is an internationally peer reviewed, open access journal that publishes manuscripts under all aspects of petroleum and gas engineering studies , Mining Engineering, Safety Technology and Engineering, Mineral Processing, Coalfield Geology, Geotechnical Engineering.',
                    'Papers submitted in this journal must be original, and of a quality that would be of interest to an international readership. Manuscripts submitted to this journal are subject to a peer review process, which involves an international panel of researchers who are expert in relevant fields. It also publishes book reviews of potential interest to readers. The journal is published in both print and online versions. The online version of the journal is free access and downloads.',
                ],
            },
        ],
        JRSE: [
            {
                title: 'Introduction',
                p: [
                    'Journal of Research in Science and Engineering (JRSE) is a peer-reviewed, monthly, online international refereed journal, which publishes original articles, research articles, review articles with top-level work from all areas of Engineering Research and their application including Mechanical, Civil, Electrical, Chemical, Electronics, Mathematics and Geological etc. Researchers in all technology and engineering fields are encouraged to contribute articles based on recent research. Journal publishes research articles and reviews within the whole field of Engineering Research, and it will continue to provide information on the latest trends and developments in this ever-expanding subject.',
                    'Online Engineering is the future trend in engineering and science. This journal covers almost all disciplines of engineering and applied sciences. ',
                    'Researchers and students of M.S., M.Phil and PhD are requested to send their original research articles to JRSE.',
                ],
            },
        ],
        JRVE: [
            {
                title: "Introduction",
                p: [
                    "Journal of Research in Vocational Education (JRVE) is a new academic journal in the field of Vocational Education and Training (VET). It publishes empirical work in all fields of VET from basic VET to continuous or adult learning. ",
                    "Works appropriate for publication in JRVE include theoretical syntheses, conceptual models, position papers, literature reviews, and empirical research papers using quantitative or qualitative methods, or both.",
                ],
            },
        ],
        JMME: [
            {
                title: 'Introduction',
                p: [
                    "Journal of Metallurgy and Materials Engineering (JMME) is a new academic journal in the field of Metallurgy and mining industry . Aims and goals of our project are the exchange of theoretical and empirical researches in the field of metallurgy and ore mining industry. The journal represents a unique collection of scientific articles, detailed overview of equipment and production processes, presentation of the latest advances in the field of information technologies, materials science, engineering pedagogics, economy, etc.",
                    "The main audience of the journal is represented by scientists of all spheres which belong to metallurgical and ore mining industry, heads of iron and steel enterprises, graduates and students, metal traders.",
                ],
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
                "Reviewers should express their views clearly with supporting arguments, and should identify relevant published work that has not been cited by the authors. Reviewers should also call to the editor's attention any substantial similarity or overlap between the manuscript under review and any other published paper."
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
    // JPME: {
    //     introduce:[
    //         {
    //             title: 'Introduction',
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