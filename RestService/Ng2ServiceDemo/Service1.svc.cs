using System.Collections.Generic;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Activation;
using System.ServiceModel.Web;


namespace WebApplication1
{
    [ServiceContract(Namespace = "")]
    [AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Allowed)]
    public class Service1
    {
        // To use HTTP GET, add [WebGet] attribute. (Default ResponseFormat is WebMessageFormat.Json)
        // To create an operation that returns XML,
        //     add [WebGet(ResponseFormat=WebMessageFormat.Xml)],
        //     and include the following line in the operation body:
        //         WebOperationContext.Current.OutgoingResponse.ContentType = "text/xml";
        [OperationContract]
        [WebGet]
        public List<Names> DoWork(string name)
        {
            List<Names> lstNames = new List<Names>();

            if (name.ToLower().Contains("ehr") 
               || name.ToLower().Contains("e|hr"))
            {
                Names _name = new Names()
                {
                    name = "Anil Guntur",
                    title = "e|HR Team"
                };
                lstNames.Add(_name);
                _name = new Names()
                {
                    name = "Chris Lawson",
                    title = "e|HR Team"
                };
                lstNames.Add(_name);

                _name = new Names()
                {
                    name = "Stephen Wolff",
                    title = "e|HR Team"
                };
                lstNames.Add(_name);
                _name = new Names()
                {
                    name = "Alvin Hsu",
                    title = "e|HR Team"
                };
                lstNames.Add(_name);
            }
            else if (name.ToLower().Contains("unity"))
            {
                Names _name = new Names()
                {
                    name = "Kyle Danielson",
                    title = "Unity Team"
                };
                lstNames.Add(_name);
                _name = new Names()
                {
                    name = "Jesse Martin",
                    title = "Unity Team"
                };
                lstNames.Add(_name);

                _name = new Names()
                {
                    name = "Dan Konigsbach",
                    title = "Unity Team"
                };
                lstNames.Add(_name);
                _name = new Names()
                {
                    name = "Scott Lewis",
                    title = "Unity Team"
                };
                lstNames.Add(_name);
            }
            else
            {
                Names _name = new Names()
                {
                    name = "No team members",
                    title = name + " Team"
                };
                lstNames.Add(_name);
            }
            
            
           
            // Add your operation implementation here
            return lstNames;
        }

        // Add more operations here and mark them with [OperationContract]
    }

    [DataContract]
    public class Names
    {
        [DataMember]
        public string name { get; set; }

        [DataMember]
        public string title { get; set; }

        

    }
}
