            {this.props.selectedDish.comments.map((comment, index) => {
              let variant = "";
              switch (comment.rating) {
                case 1:
                  variant = "danger";
                  break;
                case 2:
                  variant = "warning";
                  break;
                case 3:
                  variant = "secondary";
                  break;
                default:
                  variant = "success";
                  break;
              }
              return (
                <ListGroup.Item key={index}>
                  {comment.author}: {comment.comment}
                  <Badge pill variant={variant} className="ml-3">
                    {comment.rating}
                  </Badge>
