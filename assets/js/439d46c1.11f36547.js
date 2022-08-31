"use strict";(self.webpackChunkopenfga_dev=self.webpackChunkopenfga_dev||[]).push([[7459],{80348:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=n(87462),i=(n(67294),n(3905)),o=n(30601);const r={sidebar_position:6,slug:"/modeling/user-groups"},s="User Groups",l={unversionedId:"content/modeling/user-groups",id:"content/modeling/user-groups",title:"User Groups",description:"In this guide you will learn how to add users to groups and grant groups access to an  using .",source:"@site/docs/content/modeling/user-groups.mdx",sourceDirName:"content/modeling",slug:"/modeling/user-groups",permalink:"/docs/modeling/user-groups",draft:!1,editUrl:"https://github.com/openfga/openfga.dev/edit/main/docs/content/modeling/user-groups.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,slug:"/modeling/user-groups"},sidebar:"docs",previous:{title:"Direct Access",permalink:"/docs/modeling/direct-access"},next:{title:"Roles and Permissions",permalink:"/docs/modeling/roles-and-permissions"}},m={},d=[{value:"Before you start",id:"before-you-start",level:2},{value:"Direct Access",id:"direct-access",level:3},{value:"<ProductName format={ProductNameFormat.ShortForm}/> Concepts",id:"-concepts",level:3},{value:"Step By Step",id:"step-by-step",level:2},{value:"01. Introduce The Concept Of A Team To The Authorization Model",id:"01-introduce-the-concept-of-a-team-to-the-authorization-model",level:3},{value:"02. Add Users As Members To The Team",id:"02-add-users-as-members-to-the-team",level:3},{value:"03. Assign The Team Members A Relation To An Object",id:"03-assign-the-team-members-a-relation-to-an-object",level:3},{value:"04. Checking An Individual Member&#39;s Access To An Object",id:"04-checking-an-individual-members-access-to-an-object",level:3},{value:"Related Sections",id:"related-sections",level:2}],p={toc:d};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"user-groups"},"User Groups"),(0,i.kt)(o.AH,{mdxType:"DocumentationNotice"}),(0,i.kt)("p",null,"In this guide you will learn how to add users to groups and grant groups access to an ",(0,i.kt)(o.uH,{section:"what-is-an-object",linkName:"object",mdxType:"ProductConcept"})," using ",(0,i.kt)(o.rZ,{format:o.v7.ProductLink,mdxType:"ProductName"}),"."),(0,i.kt)(o.S1,{title:"When to use",appearance:"filled",description:(0,i.kt)("div",null,(0,i.kt)("p",null,"Adding a relationship tuple specifying that a group has a relation to an object is helpful in cases where you want to encompass a set of users with the same relation to an object. For example:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Grant a group of ",(0,i.kt)("inlineCode",{parentName:"li"},"engineers")," ",(0,i.kt)("inlineCode",{parentName:"li"},"viewer")," access to ",(0,i.kt)("inlineCode",{parentName:"li"},"roadmap.doc")),(0,i.kt)("li",{parentName:"ul"},"Create a ",(0,i.kt)("inlineCode",{parentName:"li"},"block_list")," of ",(0,i.kt)("inlineCode",{parentName:"li"},"members")," who can't access a ",(0,i.kt)("inlineCode",{parentName:"li"},"document")),(0,i.kt)("li",{parentName:"ul"},"Sharing a ",(0,i.kt)("inlineCode",{parentName:"li"},"document")," with a ",(0,i.kt)("inlineCode",{parentName:"li"},"team")),(0,i.kt)("li",{parentName:"ul"},"Granting ",(0,i.kt)("inlineCode",{parentName:"li"},"viewer")," access to a ",(0,i.kt)("inlineCode",{parentName:"li"},"photo")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"followers")," only"),(0,i.kt)("li",{parentName:"ul"},"Making a ",(0,i.kt)("inlineCode",{parentName:"li"},"file")," viewable for all ",(0,i.kt)("inlineCode",{parentName:"li"},"users")," within an ",(0,i.kt)("inlineCode",{parentName:"li"},"organization")),(0,i.kt)("li",{parentName:"ul"},"Restricting access from or to ",(0,i.kt)("inlineCode",{parentName:"li"},"users")," in a certain ",(0,i.kt)("inlineCode",{parentName:"li"},"locale")))),mdxType:"CardBox"}),(0,i.kt)("h2",{id:"before-you-start"},"Before you start"),(0,i.kt)("p",null,"In order to understand this guide correctly you must be familiar with some ",(0,i.kt)(o.uH,{mdxType:"ProductConcept"})," and know how to develop the things that we will list below."),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("p",null,"Assume that you have the following ",(0,i.kt)(o.uH,{section:"what-is-an-authorization-model",linkName:"authorization model",mdxType:"ProductConcept"}),".",(0,i.kt)("br",null),"\nYou have an ",(0,i.kt)("em",{parentName:"p"},(0,i.kt)(o.uH,{section:"what-is-an-object",linkName:"object",mdxType:"ProductConcept"}))," called ",(0,i.kt)("inlineCode",{parentName:"p"},"document")," that ",(0,i.kt)("em",{parentName:"p"},"users")," can be related to as an ",(0,i.kt)("inlineCode",{parentName:"p"},"editor"),".")),(0,i.kt)(o.lG,{configuration:{type_definitions:[{type:"document",relations:{editor:{this:{}}}}]},mdxType:"AuthzModelSnippetViewer"}),(0,i.kt)("hr",null),(0,i.kt)("p",null,"In addition, you will need to know the following:"),(0,i.kt)("h3",{id:"direct-access"},"Direct Access"),(0,i.kt)("p",null,"You need to know how to create an authorization model and create a relationship tuple to grant a user access to an object. ",(0,i.kt)("a",{parentName:"p",href:"/docs/modeling/direct-access"},"Learn more \u2192")),(0,i.kt)("h3",{id:"-concepts"},(0,i.kt)(o.rZ,{format:o.v7.ShortForm,mdxType:"ProductName"})," Concepts"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)(o.uH,{section:"what-is-a-type",linkName:"Type",mdxType:"ProductConcept"}),": a class of objects that have similar characteristics"),(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)(o.uH,{section:"what-is-a-user",linkName:"User",mdxType:"ProductConcept"}),": an entity in the system that can be related to an object"),(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)(o.uH,{section:"what-is-a-relation",linkName:"Relation",mdxType:"ProductConcept"}),": is a string defined in the type definition of an authorization model that defines the possibility of a relationship between an object of the same type as the type definition and a user in the system"),(0,i.kt)("li",{parentName:"ul"},"An ",(0,i.kt)(o.uH,{section:"what-is-an-object",linkName:"Object",mdxType:"ProductConcept"}),": represents an entity in the system. Users' relationships to it can be define through relationship tuples and the authorization model"),(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)(o.uH,{section:"what-is-a-relationship-tuple",linkName:"Relationship Tuple",mdxType:"ProductConcept"}),": a grouping consisting of a user, a relation and an object stored in ",(0,i.kt)(o.rZ,{format:o.v7.ShortForm,mdxType:"ProductName"})))),(0,i.kt)(o.XQ,{mdxType:"Playground"}),(0,i.kt)("h2",{id:"step-by-step"},"Step By Step"),(0,i.kt)("p",null,"As we develop our application, we might encounter use cases where a group of users have a certain role or permission on an object. For example, ",(0,i.kt)("inlineCode",{parentName:"p"},"members")," of a certain ",(0,i.kt)("inlineCode",{parentName:"p"},"team")," might have an ",(0,i.kt)("inlineCode",{parentName:"p"},"editor")," relation to a certain ",(0,i.kt)("inlineCode",{parentName:"p"},"document"),"."),(0,i.kt)("p",null,"In order to represent this in ",(0,i.kt)(o.rZ,{format:o.v7.ShortForm,mdxType:"ProductName"}),", we need:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Introduce the concept of a ",(0,i.kt)("inlineCode",{parentName:"li"},"team")," to the authorization model"),(0,i.kt)("li",{parentName:"ol"},"Add ",(0,i.kt)("em",{parentName:"li"},"users")," as ",(0,i.kt)("inlineCode",{parentName:"li"},"members")," to the ",(0,i.kt)("inlineCode",{parentName:"li"},"team")),(0,i.kt)("li",{parentName:"ol"},"Assign the ",(0,i.kt)("inlineCode",{parentName:"li"},"team")," members a relation to an ",(0,i.kt)("em",{parentName:"li"},"object")),(0,i.kt)("li",{parentName:"ol"},"Checking an individual member's access to the ",(0,i.kt)("em",{parentName:"li"},"object"))),(0,i.kt)("h3",{id:"01-introduce-the-concept-of-a-team-to-the-authorization-model"},"01. Introduce The Concept Of A Team To The Authorization Model"),(0,i.kt)("p",null,"We need to define the ",(0,i.kt)("em",{parentName:"p"},(0,i.kt)(o.uH,{section:"what-is-an-object",linkName:"object",mdxType:"ProductConcept"}))," ",(0,i.kt)("inlineCode",{parentName:"p"},"team")," in our authorization model. In our use case, a ",(0,i.kt)("inlineCode",{parentName:"p"},"team")," can have ",(0,i.kt)("inlineCode",{parentName:"p"},"member"),"s, so we make the following changes to our authorization model:"),(0,i.kt)(o.lG,{configuration:{type_definitions:[{type:"document",relations:{editor:{this:{}}}},{type:"team",relations:{member:{this:{}}}}]},mdxType:"AuthzModelSnippetViewer"}),(0,i.kt)("h3",{id:"02-add-users-as-members-to-the-team"},"02. Add Users As Members To The Team"),(0,i.kt)("p",null,"We can now assign ",(0,i.kt)("em",{parentName:"p"},(0,i.kt)(o.uH,{section:"what-is-a-user",linkName:"users",mdxType:"ProductConcept"}))," as ",(0,i.kt)("inlineCode",{parentName:"p"},"member"),"s of ",(0,i.kt)("inlineCode",{parentName:"p"},"team"),"s. Let's create a new ",(0,i.kt)("em",{parentName:"p"},(0,i.kt)(o.uH,{section:"what-is-a-relationship-tuple",linkName:"relationship tuple",mdxType:"ProductConcept"}))," that states ",(0,i.kt)("strong",{parentName:"p"},"alice is a member of team:writers"),"."),(0,i.kt)(o.Gb,{relationshipTuples:[{user:"alice",relation:"member",object:"team:writers"}],mdxType:"WriteRequestViewer"}),(0,i.kt)("h3",{id:"03-assign-the-team-members-a-relation-to-an-object"},"03. Assign The Team Members A Relation To An Object"),(0,i.kt)("p",null,"To represent groups we use the ",(0,i.kt)("inlineCode",{parentName:"p"},"type:object_id#relation")," format, which represents the set of users related to the ",(0,i.kt)("inlineCode",{parentName:"p"},"type:object_id")," as a certain relation. For example, ",(0,i.kt)("inlineCode",{parentName:"p"},"team:writers#members")," is used to represent the set of users related to the ",(0,i.kt)("strong",{parentName:"p"},"team:writers")," ",(0,i.kt)("em",{parentName:"p"},"object")," as ",(0,i.kt)("inlineCode",{parentName:"p"},"member"),"s."),(0,i.kt)("p",null,"In order to assign ",(0,i.kt)("inlineCode",{parentName:"p"},"member"),"s of a ",(0,i.kt)("inlineCode",{parentName:"p"},"team")," a relation to a ",(0,i.kt)("inlineCode",{parentName:"p"},"document"),", we can create the following ",(0,i.kt)("em",{parentName:"p"},"relationship tuple")," that states that ",(0,i.kt)("strong",{parentName:"p"},"members of team:writers are editors of document:meeting_notes.doc"),"."),(0,i.kt)(o.Gb,{relationshipTuples:[{_description:"Set of users related to 'team:writers' as 'member'",user:"team:writers#member",relation:"editor",object:"document:meeting_notes.doc"}],mdxType:"WriteRequestViewer"}),(0,i.kt)("h3",{id:"04-checking-an-individual-members-access-to-an-object"},"04. Checking An Individual Member's Access To An Object"),(0,i.kt)("p",null,"Now that we have:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"a relationship tuple indicating that ",(0,i.kt)("strong",{parentName:"li"},"alice")," is an ",(0,i.kt)("inlineCode",{parentName:"li"},"member")," of ",(0,i.kt)("strong",{parentName:"li"},"team:writers")),(0,i.kt)("li",{parentName:"ul"},"a relationship tuple indicating that ",(0,i.kt)("strong",{parentName:"li"},"members of team:writers are editors of document:meeting_notes.doc"))),(0,i.kt)("p",null,"This means that if we ","*",(0,i.kt)(o.uH,{section:"what-is-a-check-request",linkName:"check",mdxType:"ProductConcept"}),(0,i.kt)("strong",{parentName:"p"},"*","is alice an editor of document:meeting_notes.doc"),"? We would get the following:"),(0,i.kt)(o.uT,{user:"alice",relation:"editor",object:"document:meeting_notes.doc",allowed:!0,mdxType:"CheckRequestViewer"}),(0,i.kt)("p",null,"The chain of resolution becomes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"alice")," is ",(0,i.kt)("inlineCode",{parentName:"li"},"member")," of ",(0,i.kt)("strong",{parentName:"li"},"team:writers")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"member"),"s of ",(0,i.kt)("strong",{parentName:"li"},"team:writers")," are ",(0,i.kt)("inlineCode",{parentName:"li"},"editor"),"s of ",(0,i.kt)("strong",{parentName:"li"},"document:meeting_notes")),(0,i.kt)("li",{parentName:"ul"},"therefore, ",(0,i.kt)("strong",{parentName:"li"},"alice")," is ",(0,i.kt)("inlineCode",{parentName:"li"},"editor")," of ",(0,i.kt)("strong",{parentName:"li"},"document:meeting_notes"))),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"Note:")," When creating relationship tuples for ",(0,i.kt)(o.rZ,{format:o.v7.ShortForm,mdxType:"ProductName"})," make sure to use unique ids for each object and user within your application domain. We're using first names and simple ids to just illustrate an easy-to-follow example.")),(0,i.kt)("h2",{id:"related-sections"},"Related Sections"),(0,i.kt)(o.$q,{description:"Check the following sections for more on how user groups can be used.",relatedLinks:[{title:"Managing Group Membership",description:"Learn how to add and remove users from groups",link:"../interacting/managing-group-membership",id:"../interacting/managing-group-membership.mdx"},{title:"Modeling Google Drive",description:"See how User Groups can be used to share documents within a domain in the Google Drive use-case.",link:"./advanced/gdrive#02-organization-permissions",id:"./advanced/gdrive.mdx#02-organization-permissions"},{title:"Modeling GitHub",description:"Granting teams permissions to a repo in the GitHub use-case.",link:"./advanced/github#02-permissions-for-teams-in-an-org",id:"./advanced/github.mdx#02-permissions-for-teams-in-an-org"}],mdxType:"RelatedSection"}))}c.isMDXComponent=!0}}]);