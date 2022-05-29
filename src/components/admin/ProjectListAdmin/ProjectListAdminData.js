import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteProject } from "../../../redux/actions/projectAction";

const ProjectListAdminData = ({ project }) => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();

  const { _id, name, price, category } = project;
  const { idToken } = useSelector((state) => state.user.user);

  // Delete Project Handler
  const deleteProjectHandler = (id) => {
    // Checking before delete
    const proceed = window.confirm("Are Your Sure ???");
    if (proceed) {
      dispatch(deleteProject(id, idToken));

      alert.success("Project Deleted Successfully");
      navigate("/admin/dashboard");
    }
  };

  return (
    <tr class="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
      <th
        scope="row"
        class="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
      >
        {name}
      </th>
      <td class="px-6 py-4">{price}</td>
      <td class="px-6 py-4">{category}</td>
      <td class="px-6 py-4">
        <Link to={`/admin/project/${_id}`}>
          <button class="group relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 p-0.5 text-sm font-medium text-orange-500 hover:text-white focus:outline-none focus:ring-4 focus:ring-cyan-200 group-hover:from-cyan-500 group-hover:to-blue-500 dark:text-white dark:focus:ring-cyan-800">
            <span class="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">
              EDIT
            </span>
          </button>
        </Link>
      </td>
      <td class="px-6 py-4 ">
        <button
          onClick={() => deleteProjectHandler(_id)}
          type="button"
          class="mr-2 mb-2 rounded-lg bg-gradient-to-r from-red-400 via-red-500 to-red-600 px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-red-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-red-300 dark:shadow-lg dark:shadow-red-800/80 dark:focus:ring-red-800"
        >
          DELETE
        </button>
      </td>
    </tr>
  );
};

export default ProjectListAdminData;
