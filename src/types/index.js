/**
 * @typedef {Object} User
 * @property {string} id
 * @property {string} name
 * @property {string} email
 */

/**
 * @typedef {Object} AuthState
 * @property {User|null} user
 * @property {string|null} token
 * @property {boolean} isLoading
 * @property {string|null} error
 */

/**
 * @typedef {'todo' | 'in-progress' | 'completed'} TaskStatus
 */

/**
 * @typedef {'low' | 'medium' | 'high'} TaskPriority
 */

/**
 * @typedef {Object} Task
 * @property {string} _id
 * @property {string} title
 * @property {string} [description]
 * @property {TaskStatus} status
 * @property {TaskPriority} priority
 * @property {string} [dueDate]
 * @property {string} createdBy
 * @property {string} createdAt
 * @property {string} updatedAt
 */

/**
 * @typedef {Object} TaskForm
 * @property {string} title
 * @property {string} [description]
 * @property {TaskStatus} status
 * @property {TaskPriority} priority
 * @property {string} [dueDate]
 */

/**
 * @typedef {Object} TaskFilters
 * @property {string} [status]
 * @property {string} [priority]
 * @property {string} [sort]
 * @property {string} [search]
 * @property {number} [page]
 */

/**
 * @typedef {Object} TaskStats
 * @property {number} todo
 * @property {number} "in-progress"
 * @property {number} completed
 * @property {number} total
 */

/**
 * @typedef {Object} TasksResponse
 * @property {Task[]} tasks
 * @property {number} totalTasks
 * @property {number} numOfPages
 */

/**
 * @typedef {Object} TaskStatsResponse
 * @property {TaskStats} stats
 */
