define(["handlebars"], function(Handlebars) { return Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<!DOCTYPE html>\n<html>\n	<head>\n		<title>"
    + container.escapeExpression(((helper = (helper = helpers.page_title || (depth0 != null ? depth0.page_title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"page_title","hash":{},"data":data}) : helper)))
    + "</title>\n		<link rel=\"stylesheet\" href=\"/assets/css/main.css\">\n\n		<link href=\"https://fonts.googleapis.com/css?family=Open+Sans:300,400\" rel=\"stylesheet\">\n		<link rel=\"shortcut icon\" href=\"/assets/img/favicon.ico\">\n	</head>\n	<body>\n\n"
    + ((stack1 = container.invokePartial(partials["@partial-block"],depth0,{"name":"@partial-block","data":data,"indent":"\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "		\n"
    + ((stack1 = container.invokePartial(partials.footer,depth0,{"name":"footer","data":data,"indent":"\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "		\n	</body>\n\n</html>\n";
},"usePartial":true,"useData":true}); });